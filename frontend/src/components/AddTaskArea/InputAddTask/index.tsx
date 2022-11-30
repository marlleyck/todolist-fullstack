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

    const handleAddTask = async (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.key === 'Enter') {
            await api.post('/auth/register', {
                title: titleTask,
                description: 'teste',
                completed: false
            })

            const response = await api.get('/tasks')

            setTaskList(response.data.tasks)
            setTitleTask('')
        }
    }

    return (
        <Container>
            <Content>
                <Plus>➕</Plus>
                <Input
                type='text'
                placeholder='Adidione uma tarefa'
                value={titleTask || ''}
                onChange={handleChangeTitleTask}
                // onKeyDown={handleAddTask}
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

            <Button>Adicionar</Button>
        </Container>
    );
}