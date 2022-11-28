import { useContext } from "react";
import { AppContext } from "../../../contexts/AppContext";
import { api } from "../../../services/api";

import { Checkbox, Container, Title } from "./styles";
import { IoMdTrash } from 'react-icons/io';

type ItemProps = {
    id?: number;
    title?: string;
    description?: string;
    completed?: boolean;
}

export const Item = ({ id, title, description, completed }: ItemProps) => {
    const { setTaskList } = useContext(AppContext)
    
    const handleDeleteTask = async (e: any) => {

        await api.delete(`/task/${id}`)

        const response = await api.get('/tasks')

        setTaskList(response.data.tasks)
        alert('Successfully deleted task!')
    }

    return (
        <Container>
            <Checkbox
            type='checkbox' />
            <Title>{title}</Title>
            <IoMdTrash
            color='white'
            size={25}
            style={{ cursor: 'pointer' }}
            onClick={handleDeleteTask} />
        </Container>
    );
}