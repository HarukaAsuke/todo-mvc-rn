import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { FontAwesome5, MaterialIcons } from "@expo/vector-icons";
import AddTodo from "./src/app/components/AddTodo";
import TodoList from "./src/app/components/TodoList";

const Tab = createBottomTabNavigator();
const AddTodoIcon: React.FC<{ size: number; color: string }> = ({
  size,
  color,
}) => <MaterialIcons name="add-task" size={size} color={color} />;
const TodoListIcon: React.FC<{ size: number; color: string }> = ({
  size,
  color,
}) => <FontAwesome5 name="tasks" size={size} color={color} />;

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen
          name="タスクを作成"
          component={AddTodo}
          options={{ tabBarIcon: AddTodoIcon }}
        />
        <Tab.Screen
          name="タスク一覧"
          component={TodoList}
          options={{ tabBarIcon: TodoListIcon }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
