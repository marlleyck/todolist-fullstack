import { useEffect } from "react";
import { useDispatch } from "react-redux";

import { fetchTasks } from "../../store/fetchActions";

import { Item } from "./Item";

import { Container } from "./styles";
import { useAppSelector } from "../../store/hooks";
import { AppDispatch } from "../../store";

export const ListItems = () => {
  const taskList = useAppSelector((state) => state.taskList);

  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    dispatch(fetchTasks());
  }, []);

  return (
    <Container>
      {taskList.loading && <div>Loading...</div>}
      {!taskList.loading && taskList.error ? (
        <div>Error: {taskList.error}</div>
      ) : null}
      {!taskList.loading && taskList.tasks.length ? (
        <>
          {taskList.tasks.map((task: any, index: any) => (
            <Item
              key={index}
              id={task.id}
              title={task.title}
              description={task.description}
              completed={task.completed}
            />
          ))}
        </>
      ) : null}
    </Container>
  );
};
