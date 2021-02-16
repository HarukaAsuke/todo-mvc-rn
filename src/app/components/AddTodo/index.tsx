import * as React from "react";
import { useState } from "react";
import axios from "axios";
import styled from "styled-components";
import {
  Dimensions,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import Snackbar from "../Snackbar";

const AddTodo = () => {
  const [todoTitle, changeTodoTitle] = useState("");
  const [created, changeCreated] = useState(false);
  const onSubmit = async () => {
    if (todoTitle.trim() === "") {
      return;
    }
    const payload = {
      title: todoTitle,
      status: "todo",
    };
    try {
      await axios.post("http://localhost:3000/todo", payload);
      changeTodoTitle("");
      changeCreated(true);
    } catch (err) {
      console.error(err);
    }
  };
  return (
    <AddTodoPresentation
      created={created}
      todoTitle={todoTitle}
      onChangeText={changeTodoTitle}
      onSubmit={onSubmit}
    />
  );
};

type Props = {
  created: boolean;
  todoTitle: string;
  onChangeText: (text: string) => unknown;
  onSubmit: () => unknown;
};

const AddTodoPresentation: React.FC<Props> = ({
  created,
  todoTitle,
  onChangeText,
  onSubmit,
}) => {
  return (
    <Section>
      {created && <Snackbar message={"タスクを作成しました"} />}
      <Form>
        <Header>タスク名を入力</Header>
        <Input value={todoTitle} onChangeText={onChangeText} />
        <SubmitSection>
          <Submit onPress={onSubmit}>
            <Text>追加する</Text>
          </Submit>
        </SubmitSection>
      </Form>
    </Section>
  );
};

const Section = styled(View)`
  margin-top: 30px;
  flex: 1;
  align-items: center;
`;

const Form = styled(View)`
  width: ${Dimensions.get("window").width - 40}px;
  margin-top: 30px;
`;

const Header = styled(Text)`
  font-weight: bold;
  font-size: 20;
`;

const Input = styled(TextInput)`
  width: ${Dimensions.get("window").width - 40}px;
  background: #fff;
  border: 1px solid #800080;
  height: 40px;
  margin-top: 15px;
`;

const SubmitSection = styled(View)`
  flex-direction: row;
  justify-content: flex-end;
`;

const Submit = styled(TouchableOpacity)`
  width:100px
  height: 40px;
  align-items:center;
  justify-content: center;
  background: #ffccff;
  margin-top: 10px;
`;

export default AddTodo;
