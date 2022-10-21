import TodoList from './TodoList'
import { useState } from 'react';
import {
  Text, View
} from 'react-native';
import { todoAppStyles } from './styles/TodoApp';
import { defineEventHandler } from './events/Event';
import { AddNewTodoSection } from './AddNewTodoSection';

const initialData = [];

const initialToggleCheckBoxesMap = new Map()
initialData.forEach((data) => {
  initialToggleCheckBoxesMap.set(data.id, data.isChecked)
})

const TodoApp = () => {

  const [data, setData] = useState(initialData)
  const [isFocused, setIsFocused] = useState(false)
  const [
    toggleCheckBoxesMap, setToggleCheckBoxesMap
  ] = useState(initialToggleCheckBoxesMap)
  const [taskDescription, setTaskDescription] = useState("")

  const [onAddButtonClick,
    onCheckBoxToggle,
    onDeleteButtonClick] = defineEventHandler(data, setData,
      toggleCheckBoxesMap, setToggleCheckBoxesMap,
      taskDescription, setTaskDescription
    )

  return (
    <View style={todoAppStyles.toDoAppcontainer}>
      <Text style={todoAppStyles.title}>Todo App</Text>
      <AddNewTodoSection
        isFocused={isFocused}
        setIsFocused={setIsFocused}
        taskDescription={taskDescription}
        setTaskDescription={setTaskDescription}
        handleAddButtonClick={onAddButtonClick}
      />
      <TodoList
        data={data}
        setData={setData}
        toggleCheckBoxesMap={toggleCheckBoxesMap}
        handleCheckBoxToggle={onCheckBoxToggle}
        handleDeleteButtonClick={onDeleteButtonClick}
      />
    </View>
  );
}

export default TodoApp