import React, { useState } from "react";
import { createTask, taskListActions } from "../../../store/ducks/taskList";
import { useDispatch } from "react-redux";

import { Button, Container, Content, Input } from "./styles";

export const InputAddTask = () => {
  const [titleTask, setTitleTask] = useState("");
  const [descriptionTask, setDescriptionTask] = useState("");

  const dispatch = useDispatch();

  const handleChangeTitleTask = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTitleTask(e.target.value);
  };

  const handleChangeDescriptionTask = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    setDescriptionTask(e.target.value);
  };

  const handleAddTask = async () => {
    try {
      if (titleTask !== "") {
        const responseCreateTask = await createTask(titleTask, descriptionTask);
        dispatch(taskListActions.setTaskList(responseCreateTask.tasks));

        setTitleTask("");
        setDescriptionTask("");
      } else {
        alert("Você não pode adicionar uma tarefa sem antes preenchê-la!");
      }
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <Container>
      <Content>
        <Input
          type="text"
          placeholder="Adicione uma tarefa"
          value={titleTask || ""}
          onChange={handleChangeTitleTask}
        />
      </Content>

      <Content>
        <Input
          type="text"
          placeholder="Adicione uma descrição para sua tarefa"
          value={descriptionTask || ""}
          onChange={handleChangeDescriptionTask}
        />
      </Content>

      <Button onClick={handleAddTask}>Adicionar</Button>
    </Container>
  );
};
