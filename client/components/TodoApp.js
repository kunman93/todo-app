import TodoList from './TodoList'
import { useState } from 'react';
import {
  Text, View, SafeAreaView,
  TextInput, TouchableOpacity
} from 'react-native';
import { todoAppStyles, getBorderStyleForInputText } from './styles/TodoApp';

// todo: change this
const initialData = [
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
    task: 'First Item First ItemFirstFirstItemFirstFirstItemFirstFirst Item Item',
    isChecked: false
  },
  {
    id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
    task: 'Second Item Second Item Second ItemSecond ItemSecond ItemSecond ItemSecond Item',
    isChecked: false
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d72',
    task: 'Third Item  Third ItemThird ItemThird ItemThird ItemThird ItemThird ItemThird Item',
    isChecked: false
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d73',
    task: 'Fourth Item Fourth Item Fourth Item Fourth ItemFourth Item',
    isChecked: false
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d74',
    task: 'Fifth Itemadsfasdfadsfasdfasdfasdfasdfasdfsa',
    isChecked: false
  },
];

const initialToggleCheckBoxesMap = new Map()
initialData.forEach((data) => { initialToggleCheckBoxesMap.set(data.id, data.isChecked) })

const defineEventHandler = (toggleCheckBoxesMap, setToggleCheckBoxesMap) => {

  const onCheckBoxToggle = (itemId) => {
    let currentToggleCheckBoxesMap = new Map(toggleCheckBoxesMap)
    currentToggleCheckBoxesMap.set(itemId, !currentToggleCheckBoxesMap.get(itemId))
    setToggleCheckBoxesMap(currentToggleCheckBoxesMap)
  }

  return onCheckBoxToggle
}

const AddNewTodoSection = ({ isFocused, setIsFocused }) => {
  return (
    <SafeAreaView style={todoAppStyles.addNewTodoContainer}>
      <TextInput
        style={[todoAppStyles.addNewTaskInputText,
        getBorderStyleForInputText(isFocused)]}
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

  const [data, setData] = useState(initialData);
  const [isFocused, setIsFocused] = useState(false)
  const [toggleCheckBoxesMap, setToggleCheckBoxesMap] = useState(initialToggleCheckBoxesMap);

  const onCheckBoxToggle = defineEventHandler(toggleCheckBoxesMap, setToggleCheckBoxesMap)
 
  return (
    <View style={todoAppStyles.toDoAppcontainer}>
      <Text style={todoAppStyles.title}>Todo App</Text>
      <AddNewTodoSection
        isFocused={isFocused}
        setIsFocused={setIsFocused}
      />
      <TodoList
        data={data}
        setData={setData}
        handleCheckBoxToggle={(itemId) => onCheckBoxToggle(itemId)}
        toggleCheckBoxesMap={toggleCheckBoxesMap}
      />
    </View>
  );
}

export default TodoApp