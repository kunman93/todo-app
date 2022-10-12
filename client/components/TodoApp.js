import TodoList from './TodoList'
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, SafeAreaView, TextInput, TouchableOpacity, FlatList } from 'react-native';

const AddNewTodoSection = () => {
  return (
    <SafeAreaView style={styles.addNewTodoContainer}>
      <TextInput 
        style={styles.addNewTaskInputText} placeholder='Add a new task' />
      <TouchableOpacity style={styles.addTaskButton}>
        <Text style={styles.addTaskButtonLabel}>Add</Text>
      </TouchableOpacity>
    </SafeAreaView>
  )
}

// TODO: All Pending Complete Tabulator + Clear All button

const TodoApp = () => {
  return (
    <View style={styles.toDoAppcontainer}>
      <StatusBar style="auto" />
      <Text style={styles.title}>Todo-App</Text>
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
    backgroundColor: '#f2f2f2'
  },
  title: {
    marginTop: '2vh',
    fontSize: '5vh'
  },
  addNewTodoContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100vw',
    paddingTop: '2vh',
    paddingBottom: '2vh',
    borderBottomWidth: '0.08em',
    borderColor: '#cccccc',
  },
  addNewTaskInputText: {
    borderWidth: '1px',
    borderColor: '#cccccc',
    borderRadius: '5px',
    marginLeft: '3vw',
    paddingLeft: '2vw',
    height: '5vh',
    width: '70%',
    fontSize: '2.5vh'
  },
  addTaskButton: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: '0.08em',
    borderColor: '#cccccc',
    borderRadius: '5px',
    marginRight: '3vw',
    height: '5vh',
    width: '20%',
  },
  addTaskButtonLabel: {
    fontSize: '2.5vh'
  }
});

export default TodoApp