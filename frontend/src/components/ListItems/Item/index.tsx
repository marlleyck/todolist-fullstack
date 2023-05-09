import { useState } from "react";
import { useDispatch } from "react-redux";

import { AppDispatch } from "../../../store";
import { deleteTask, updateTaskStatus } from "../../../store/fetchActions";

import {
  Checkbox,
  Container,
  Content,
  ContentDescription,
  ContentTitle,
  Description,
  Title,
} from "./styles";
import { IoMdTrash } from "react-icons/io";

type ItemProps = {
  id?: number;
  title?: string;
  description?: string;
  completed?: boolean;
};

export const Item = ({ id, title, description, completed }: ItemProps) => {
  const [checkboxValue, setCheckboxValue] = useState(completed);
  const [show, setShow] = useState(false);

  const dispatch = useDispatch<AppDispatch>();

  const handleDeleteTask = async () => {
    dispatch(deleteTask(id!));

    alert("Successfully deleted task!");
  };

  const handleStateTask = async (e: any) => {
    setCheckboxValue(e.target.checked);

    const taskData = {
      id,
      title,
      description,
      checkboxValue,
    };

    dispatch(updateTaskStatus(taskData));

    alert("Updated task successfully!");
  };

  const handleShowDescription = () => {
    setShow((state) => !state);
  };

  return (
    <>
      <Container>
        <Content>
          <Checkbox
            type="checkbox"
            checked={checkboxValue}
            onChange={handleStateTask}
          />
        </Content>
        <ContentTitle onClick={handleShowDescription}>
          <Title>{title}</Title>
        </ContentTitle>
        <Content>
          <IoMdTrash
            color="white"
            size={25}
            style={{ cursor: "pointer" }}
            onClick={handleDeleteTask}
          />
        </Content>
      </Container>

      <ContentDescription show={show}>
        <Description>{description}</Description>
      </ContentDescription>
    </>
  );
};
