import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createStackNavigator } from "@react-navigation/stack";
import { FontAwesome5, MaterialIcons } from "@expo/vector-icons";
import AddTodo from "./src/app/components/AddTodo";
import TodoList from "./src/app/components/TodoList";
import EditTodo from "./src/app/components/EditTodo";

const Tab = createBottomTabNavigator();

const AddTodoStack = createStackNavigator();
const TodoListStack = createStackNavigator();

const AddTodoStackComponent = () => {
  return (
    <AddTodoStack.Navigator>
      <AddTodoStack.Screen name="タスクの追加" component={AddTodo} />
    </AddTodoStack.Navigator>
  );
};

const TodoListStackComponent = () => {
  return (
    <TodoListStack.Navigator>
      <TodoListStack.Screen name="タスク一覧" component={TodoList} />
      <TodoListStack.Screen name="タスク編集" component={EditTodo} />
    </TodoListStack.Navigator>
  );
};

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
          name="AddTodoStack"
          component={AddTodoStackComponent}
          options={{ tabBarIcon: AddTodoIcon }}
        />
        <Tab.Screen
          name="TodoListStack"
          component={TodoListStackComponent}
          options={{ tabBarIcon: TodoListIcon }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
