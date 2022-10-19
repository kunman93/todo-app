import TodoList from './TodoList'
import { useState } from 'react';
import {
  Text, View, SafeAreaView,
  TextInput, TouchableOpacity
} from 'react-native';
import { todoAppStyles } from './styles/TodoApp';

const getBorderStyleForInputText = (isFocused) => {

  const getBorderStyleForInputTextWhenNotFocused = () => {
    return {
      borderColor: todoAppStyles.addNewTaskInputText.borderColor,
      borderWidth: todoAppStyles.addNewTaskInputText.borderWidth
    }
  }

  const getBorderStyleForInputTextWhenFocused = () => {
    return {
      borderColor: todoAppStyles.addNewTaskInputTextFocused.borderColor,
      borderWidth: todoAppStyles.addNewTaskInputTextFocused.borderWidth
    }
  }

  if (isFocused) {
    return getBorderStyleForInputTextWhenFocused()
  }
  return getBorderStyleForInputTextWhenNotFocused()
}

const AddNewTodoSection = () => {
  const [isFocused, setIsFocused] = useState(false)

  return (
    <SafeAreaView style={todoAppStyles.addNewTodoContainer}>
      <TextInput
        style={[todoAppStyles.addNewTaskInputText,
          , getBorderStyleForInputText(isFocused)]
        }
        placeholder='Write a new task'
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)} />
      <TouchableOpacity style={todoAppStyles.addTaskButton}>
        <Text style={todoAppStyles.addTaskButtonLabel}>Add</Text>
      </TouchableOpacity>
    </SafeAreaView>
  )
}

const TodoApp = () => {
  return (
    <View style={todoAppStyles.toDoAppcontainer}>
      <Text style={todoAppStyles.title}>Todo App</Text>
      <AddNewTodoSection />
      <TodoList />
    </View>
  );
}

export default TodoApp