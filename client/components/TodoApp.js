import TodoList from './TodoList'
import { useState } from 'react';
import {
  Text, View, SafeAreaView,
  TextInput, TouchableOpacity
} from 'react-native';
import 'react-native-get-random-values'
import { v4 as uuidv4 } from 'uuid'
import { todoAppStyles, getBorderStyleForInputText } from './styles/TodoApp';

const initialData = [
  /*{
    id: uuidv4().toString,
    task: 'First Item First ItemFirstFirstItemFirstFirstItemFirstFirst Item Item',
    isChecked: false
  },
  {
    id: uuidv4(),
    task: 'Second Item Second Item Second ItemSecond ItemSecond ItemSecond ItemSecond Item',
    isChecked: false
  },
  {
    id: uuidv4(),
    task: 'Third Item  Third ItemThird ItemThird ItemThird ItemThird ItemThird ItemThird Item',
    isChecked: false
  },
  {
    id: uuidv4(),
    task: 'Fourth Item Fourth Item Fourth Item Fourth ItemFourth Item',
    isChecked: false
  },
  {
    id: uuidv4(),
    task: 'Fifth Itemadsfasdfadsfasdfasdfasdfasdfasdfsa',
    isChecked: false
  },*/
];

const initialToggleCheckBoxesMap = new Map()
initialData.forEach((data) => { initialToggleCheckBoxesMap.set(data.id, data.isChecked) })

const defineEventHandler = (data, setData,
  toggleCheckBoxesMap, setToggleCheckBoxesMap,
  taskDescription, setTaskDescription) => {

  const onCheckBoxToggle = (itemId) => {
    updateToggleCheckBoxesMap(itemId)
    updateIsCheckedInData(itemId)
  }

  const updateToggleCheckBoxesMap = (itemId) => {
    let currentToggleCheckBoxesMap = new Map(toggleCheckBoxesMap)
    currentToggleCheckBoxesMap.set(itemId, !currentToggleCheckBoxesMap.get(itemId))
    setToggleCheckBoxesMap(currentToggleCheckBoxesMap)
  }

  const updateIsCheckedInData = (itemId) => {
    let currentData = [...data]
    currentData.forEach((data) => {
      if (data.id === itemId) {
        data.isChecked = !data.isChecked
      }
    })
    setData(currentData)
  }

  const onDeleteButtonClick = (itemId) => {
    deleteItemInData(itemId)
    deleteEntryFromToggleCheckBoxesMap(itemId)
  }

  const deleteItemInData = (itemId) => {
    let currentData = [...data]
    currentData = currentData.filter((data) => data.id !== itemId)
    setData(currentData)
  }

  const deleteEntryFromToggleCheckBoxesMap = (itemId) => {
    let currentToggleCheckBoxesMap = new Map(toggleCheckBoxesMap)
    currentToggleCheckBoxesMap.delete(itemId)
    setToggleCheckBoxesMap(currentToggleCheckBoxesMap)
  }

  const onAddButtonClick = () => {
    let itemId = uuidv4()
    addNewItemInData(itemId)
    addNewEntryInToggleCheckBoxesMap(itemId)
  }

  const addNewItemInData = (itemId) => {
    let currentData = [...data]
    let newTask = {
      id: itemId,
      task: taskDescription,
      isChecked: false
    }
    currentData.push(newTask)
    setData(currentData)
  }

  const addNewEntryInToggleCheckBoxesMap = (itemId) => {
    let currentToggleCheckBoxesMap = new Map(toggleCheckBoxesMap)
    currentToggleCheckBoxesMap.set(itemId, false)
    setToggleCheckBoxesMap(currentToggleCheckBoxesMap)
  }

  return [onAddButtonClick, onCheckBoxToggle, onDeleteButtonClick]
}

const AddNewTodoSection = ({ isFocused, setIsFocused, setTaskDescription, handleAddButtonClick }) => {
  return (
    <SafeAreaView style={todoAppStyles.addNewTodoContainer}>
      <TextInput
        style={[todoAppStyles.addNewTaskInputText,
        getBorderStyleForInputText(isFocused)]}
        placeholder='Write a new task'
        onChangeText={setTaskDescription}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)} />
      <TouchableOpacity
        style={todoAppStyles.addTaskButton}
        onPress={() => handleAddButtonClick()}>
        <Text style={todoAppStyles.addTaskButtonLabel}>Add</Text>
      </TouchableOpacity>
    </SafeAreaView>
  )
}

const TodoApp = () => {

  const [data, setData] = useState(initialData)
  const [isFocused, setIsFocused] = useState(false)
  const [toggleCheckBoxesMap, setToggleCheckBoxesMap] = useState(initialToggleCheckBoxesMap)
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