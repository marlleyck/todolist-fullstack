import { useContext } from "react";
import { AppContext } from "../../contexts/AppContext";

import { Item } from "./Item";

import { Container } from "./styles";

export const ListItems = () => {
    const { taskList, apiIsArrived } = useContext(AppContext)

    return (
        <Container>
            {
                apiIsArrived ?
                    <>
                        { taskList?.map((task, index) => (
                            <Item
                            key={index}
                            title={task.title}
                            description={task.description}
                            completed={task.completed}  /> ))
                        }
                    </>
                : null
            }
        </Container>
    );
}