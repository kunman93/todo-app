import {StyleSheet} from 'react-native'
import { vh, vw } from 'react-native-css-vh-vw'

export const addNewTodoSectionStyles = StyleSheet.create({
  addNewTodoContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: vw(100),
    paddingTop: vh(2),
    paddingBottom: vh(3),
    borderBottomWidth: 0.8,
    borderColor: '#cccccc',
  },
  addNewTaskInputText: {
    borderWidth: 1,
    borderColor: '#cccccc',
    borderRadius: 5,
    marginLeft: vw(5),
    paddingLeft: vw(5),
    height: vh(9),
    width: '60%',
    fontFamily: 'FuzzyBubbles-Regular',
    fontSize: vh(3.5)
  },
  addNewTaskInputTextFocused: {
    borderWidth: 2,
    borderColor: '#9999ff',
  },
  addTaskButton: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 0.8,
    borderColor: '#cccccc',
    borderRadius: 5,
    marginRight: vw(5),
    height: vh(9),
    width: '25%',
    backgroundColor: '#008000'
  },
  addTaskButtonLabel: {
    fontSize: vh(3.5),
    fontFamily: 'FuzzyBubbles-Bold',
    color: '#f2f2f2'
  }
});

export const getBorderStyleForInputText = (isFocused) => {

  const getBorderStyleForInputTextWhenNotFocused = () => {
    return {
      borderColor: addNewTodoSectionStyles.addNewTaskInputText.borderColor,
      borderWidth: addNewTodoSectionStyles.addNewTaskInputText.borderWidth
    }
  }

  const getBorderStyleForInputTextWhenFocused = () => {
    return {
      borderColor: addNewTodoSectionStyles.addNewTaskInputTextFocused.borderColor,
      borderWidth: addNewTodoSectionStyles.addNewTaskInputTextFocused.borderWidth
    }
  }

  if (isFocused) {
    return getBorderStyleForInputTextWhenFocused()
  }
  return getBorderStyleForInputTextWhenNotFocused()
}