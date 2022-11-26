import { AddTaskArea } from '../../components/AddTaskArea';
import { ListItems } from '../../components/ListItems';

import { Container } from './styles';

export const Home = () => {
    return  (
        <Container>
            <AddTaskArea />
            <ListItems />
        </Container>
    );
}