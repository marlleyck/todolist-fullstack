import React, { useState } from 'react';
import { api } from '../../../services/api';

import { Container, Input, Plus } from './styles';

export const InputAddTask = () => {
    const [titleTask, setTitleTask] = useState('')

    const handleChangeTitleTask = (e: React.ChangeEvent<HTMLInputElement>) => {
        setTitleTask(e.target.value)
    }

    const handleAddTask = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.key === 'Enter') {
            api.post('/auth/register', {
                title: titleTask,
                description: 'teste',
                completed: false
            })
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