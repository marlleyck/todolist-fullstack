import { Checkbox, Container, Title } from "./styles";
import { IoMdTrash } from 'react-icons/io';

type ItemProps = {
    title?: string;
    description?: string;
    completed?: boolean;
}

export const Item = ({ title, description, completed }: ItemProps) => {
    return (
        <Container>
            <Checkbox
            type='checkbox' />
            <Title>{title}</Title>
            <IoMdTrash
            color='white'
            size={25}
            style={{ cursor: 'pointer' }} />
        </Container>
    );
}