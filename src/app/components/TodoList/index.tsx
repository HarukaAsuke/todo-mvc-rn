import * as React from "react";
import { Text, View } from "react-native";

const TodoList: React.FC = () => {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>タスク一覧の画面</Text>
    </View>
  );
};

export default TodoList;
