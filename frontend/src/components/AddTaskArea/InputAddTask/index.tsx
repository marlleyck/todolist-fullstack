import { Container, Input, Plus } from './styles';

export const InputAddTask = () => {
    return (
        <Container>
            <Plus>➕</Plus>
            <Input
            type='text'
            placeholder='Adidione uma tarefa' />
        </Container>
    );
}