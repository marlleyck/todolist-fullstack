import { Container, Title } from "./styles";

type ItemProps = {
    title?: string;
    description?: string;
    completed?: boolean;
}

export const Item = ({ title, description, completed }: ItemProps) => {
    return (
        <Container>
            <Title>Ler</Title>
        </Container>
    );
}