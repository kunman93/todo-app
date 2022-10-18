import TodoList from './TodoList'
import { StyleSheet, Text, View, SafeAreaView, TextInput, TouchableOpacity, FlatList } from 'react-native';
import { vh, vw } from 'react-native-css-vh-vw'

const AddNewTodoSection = () => {
  return (
    <SafeAreaView style={styles.addNewTodoContainer}>
      <TextInput 
        style={styles.addNewTaskInputText} placeholder='Write a new task'/>
      <TouchableOpacity style={styles.addTaskButton}>
        <Text style={styles.addTaskButtonLabel}>Add</Text>
      </TouchableOpacity>
    </SafeAreaView>
  )
}

const TodoApp = () => {
  return (
    <View style={styles.toDoAppcontainer}>
      <Text style={styles.title}>Todo App</Text>
      <AddNewTodoSection />
      <TodoList />
    </View>
  );
}

const styles = StyleSheet.create({
  toDoAppcontainer: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'center',
    height: '100%',
    width: '100%',
    backgroundColor: '#f2f2f2',
  },
  title: {
    fontFamily: 'FuzzyBubbles-Regular',
    fontSize: vh(8), 
    marginTop: vh(2),
  },
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

export default TodoApp