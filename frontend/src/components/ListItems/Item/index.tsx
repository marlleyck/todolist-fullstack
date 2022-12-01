import { useContext, useState } from "react";
import { AppContext } from "../../../contexts/AppContext";
import { api } from "../../../services/api";

import { Checkbox, Container, Content, ContentDescription, ContentTitle, Description, Title } from "./styles";
import { IoMdTrash } from 'react-icons/io';

type ItemProps = {
    id?: number;
    title?: string;
    description?: string;
    completed?: boolean;
}

export const Item = ({ id, title, description, completed }: ItemProps) => {
    const [checkboxValue, setCheckboxValue] = useState(completed)
    const [show, setShow] = useState(false)

    const { setTaskList } = useContext(AppContext)
    
    const handleDeleteTask = async () => {

        await api.delete(`/task/${id}`)

        const response = await api.get('/tasks')

        setTaskList(response.data.tasks)
        alert('Successfully deleted task!')
    }

    const handleStateTask = async (e: any) => {
        setCheckboxValue(e.target.checked)        
        
        await api.put(`/task/${id}`, {
            title: title,
            description: 'teste',
            completed: !checkboxValue
        })

        alert('Updated task successfully!')
    }

    const handleShowDescription = () => {
        setShow((state) => !state)
    }

    return (
        <>
            <Container>
                <Content>
                    <Checkbox
                    type='checkbox'
                    checked={checkboxValue}
                    onChange={handleStateTask} />
                </Content>
                <ContentTitle
                onClick={handleShowDescription}>
                    <Title>{title}</Title>
                </ContentTitle>
                <Content>
                    <IoMdTrash
                    color='white'
                    size={25}
                    style={{ cursor: 'pointer' }}
                    onClick={handleDeleteTask} />
                </Content>
            </Container>

            <ContentDescription
            show={show}>
                <Description>{description}</Description>
            </ContentDescription>
        </>
    );
}