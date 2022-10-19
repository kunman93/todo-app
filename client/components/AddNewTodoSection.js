import {
  Text, SafeAreaView,
  TextInput, TouchableOpacity
} from 'react-native';
import { addNewTodoSectionStyles, getBorderStyleForInputText } from './styles/AddNewTodoSection';

export const AddNewTodoSection = ({ isFocused, setIsFocused, setTaskDescription, handleAddButtonClick }) => {
  return (
    <SafeAreaView style={addNewTodoSectionStyles.addNewTodoContainer}>
      <TextInput
        style={[addNewTodoSectionStyles.addNewTaskInputText,
        getBorderStyleForInputText(isFocused)]}
        placeholder='Write a new task'
        onChangeText={setTaskDescription}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)} />
      <TouchableOpacity
        style={addNewTodoSectionStyles.addTaskButton}
        onPress={() => handleAddButtonClick()}>
        <Text style={addNewTodoSectionStyles.addTaskButtonLabel}>Add</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};
