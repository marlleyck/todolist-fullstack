import React, { useContext, useState } from 'react';
import { TaskType } from '../../../@types/TaskType';
import { AppContext } from '../../../contexts/AppContext';
import { api } from '../../../services/api';

import { Button, Container, Content, Input, Plus } from './styles';

export const InputAddTask = () => {
    const [titleTask, setTitleTask] = useState('')
    const [descriptionTask, setDescriptionTask] = useState('')

    const { setTaskList } = useContext(AppContext)

    const handleChangeTitleTask = (e: React.ChangeEvent<HTMLInputElement>) => {
        setTitleTask(e.target.value)
    }

    const handleChangeDescriptionTask = (e: React.ChangeEvent<HTMLInputElement>) => {
        setDescriptionTask(e.target.value)
    }

    const handleAddTask = async () => {
        try {
            if (titleTask !== '') {
                await api.post('/auth/register', {
                    title: titleTask,
                    description: descriptionTask,
                    completed: false
                })
    
                const response = await api.get('/tasks')
    
                setTaskList(response.data.tasks)
                setTitleTask('')
                setDescriptionTask('')
            } else {
                alert('Você não pode adicionar uma tarefa sem antes preenchê-la!')
            }
        } catch(e) {
            console.log(e)
        }
            
    }

    return (
        <Container>
            <Content>
                <Plus>➕</Plus>
                <Input
                type='text'
                placeholder='Adicione uma tarefa'
                value={titleTask || ''}
                onChange={handleChangeTitleTask}
                 />
            </Content>

            <Content>
                <Plus>➕</Plus>
                <Input
                type='text'
                placeholder='Adicione uma descrição para sua tarefa'
                value={descriptionTask || ''}
                onChange={handleChangeDescriptionTask} />
            </Content>

            <Button
            onClick={handleAddTask}>
                Adicionar
            </Button>
        </Container>
    );
}