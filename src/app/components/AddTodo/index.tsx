import * as React from "react";
import { useState } from "react";
import styled from "styled-components";
import {
  Dimensions,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";

const AddTodo = () => {
  const [todoTitle, changeTodoTitle] = useState("");
  console.log(todoTitle);
  return (
    <AddTodoPresentation todoTitle={todoTitle} onChangeText={changeTodoTitle} />
  );
};

type Props = {
  todoTitle: string;
  // onSubmit: () => unknown
  onChangeText: (text: string) => unknown;
};

const AddTodoPresentation: React.FC<Props> = ({
  todoTitle,
  // onSubmit,
  onChangeText,
}) => {
  return (
    <Section>
      <Form>
        <Header>タスク名を入力</Header>
        <Input value={todoTitle} onChangeText={onChangeText} />
        <SubmitSection>
          <Submit>
            <Text>追加する</Text>
          </Submit>
        </SubmitSection>
      </Form>
    </Section>
  );
};

const Section = styled(View)`
  margin-top: 60px;
  flex: 1;
  align-items: center;
`;

const Form = styled(View)`
  width: ${Dimensions.get("window").width - 40}px;
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
