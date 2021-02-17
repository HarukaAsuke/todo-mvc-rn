import * as React from "react";
import { useCallback, useState } from "react";
import axios from "axios";
import {
  Dimensions,
  SectionList,
  Text,
  TouchableHighlight,
  View,
} from "react-native";
import styled from "styled-components";
import { useNavigation, useFocusEffect } from "@react-navigation/native";

const dummyData = [
  {
    title: "TODO",
    data: [
      {
        id: "aaaa-bbbb-cccc",
        title: "Snackbarをコンポーネント化する",
        status: "todo",
      },
      {
        id: "aaaa-bbbb-cccc",
        title: "Snackbarをコンポーネント化する！！！！！",
        status: "todo",
      },
    ],
  },
  {
    title: "DOING",
    data: [
      {
        id: "dddd-eeee-ffff",
        title: "タスク一覧画面の作成",
        status: "doing",
      },
    ],
  },
  {
    title: "DONE",
    data: [
      {
        id: "gggg-hhhh-iiii",
        title: "Snackbarの見た目を作る",
        status: "done",
      },
    ],
  },
];

type task = {
  id: string;
  title: string;
  status: "todo" | "doing" | "done";
};

type Sections = {
  title: string;
  data: Array<task>;
}[];

const TodoList: React.FC = () => {
  const navigation = useNavigation();
  const [data, setData] = useState<null | Sections>(null);

  useFocusEffect(
    useCallback(() => {
      axios.get("http://localhost:3000/todo").then((res) => {
        const processedData: Sections = [
          {
            title: "todo",
            data: [],
          },
          {
            title: "doing",
            data: [],
          },
          {
            title: "done",
            data: [],
          },
        ];
        for (const task of res.data) {
          if (task.status === "todo") {
            processedData[0].data.push(task);
          }
          if (task.status === "doing") {
            processedData[1].data.push(task);
          }
          if (task.status === "done") {
            processedData[2].data.push(task);
          }
        }
        setData(processedData);
      });
    }, [])
  );

  if (!data) return null;
  return (
    <Section>
      <SectionList
        sections={data}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <ItemWrapper
            onPress={() => navigation.navigate("タスク編集", { id: item.id })}
            underlayColor={"#bbb"}
          >
            <ItemText>{item.title}</ItemText>
          </ItemWrapper>
        )}
        renderSectionHeader={({ section }) => (
          <SectionHeaderWrapper>
            <SectionHeaderText>{section.title}</SectionHeaderText>
          </SectionHeaderWrapper>
        )}
      />
      <Text>タスク一覧の画面</Text>
    </Section>
  );
};

const Section = styled(View)`
  align-items: center;
  height: ${Dimensions.get("window").height}px;
`;

const SectionHeaderWrapper = styled(View)`
  width: ${Dimensions.get("window").width}px;
  justify-content: center;
  height: 40px;
  background: #ffccff;
`;

const SectionHeaderText = styled(Text)`
  font-weight: bold;
  margin-left: 10px;
  font-size: 20;
`;

const ItemWrapper = styled(TouchableHighlight)`
  height: 60px;
  justify-content: center;
  border-top-color: #aaa;
  border-top-width: 1px;
`;

const ItemText = styled(Text)`
  margin-left: 15px;
`;

export default TodoList;
