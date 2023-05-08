import { useEffect } from "react";
import { useDispatch } from "react-redux";

import { apiIsArrivedActions } from "../../store/ducks/apiIsArrived";
import { fetchTaskList, taskListActions } from "../../store/ducks/taskList";

import { Item } from "./Item";

import { Container } from "./styles";
import { useAppSelector } from "../../store/hooks";

export const ListItems = () => {
  const { taskList } = useAppSelector((state) => state.taskList);

  const dispatch = useDispatch();
  const apiIsArrived = useAppSelector((state) => state.apiIsArrived);

  useEffect(() => {
    const getTaskList = async () => {
      const taskListResponse = await fetchTaskList();
      dispatch(taskListActions.setTaskList(taskListResponse.tasks));
      dispatch(apiIsArrivedActions.changeValue(true));
    };

    getTaskList();
  }, []);

  return (
    <Container>
      {apiIsArrived.value ? (
        <>
          {taskList?.map((task: any, index: any) => (
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
