import { InputAddTask } from './InputAddTask';

import { Container, Title } from './styles';

export const AddTaskArea = () => {
    return (
        <Container>
            <Title>Lista de Tarefas</Title>
            <InputAddTask />
        </Container>
    );
}