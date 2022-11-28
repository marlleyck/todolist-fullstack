import React, { useContext, useState } from 'react';
import { TaskType } from '../../../@types/TaskType';
import { AppContext } from '../../../contexts/AppContext';
import { api } from '../../../services/api';

import { Container, Input, Plus } from './styles';

export const InputAddTask = () => {
    const [titleTask, setTitleTask] = useState('')
    const { taskList, setTaskList } = useContext(AppContext)

    const handleChangeTitleTask = (e: React.ChangeEvent<HTMLInputElement>) => {
        setTitleTask(e.target.value)
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
        }
    }

    return (
        <Container>
            <Plus>➕</Plus>
            <Input
            type='text'
            placeholder='Adidione uma tarefa'
            onChange={handleChangeTitleTask}
            onKeyDown={handleAddTask} />
        </Container>
    );
}