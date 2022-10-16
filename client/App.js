import TodoApp from './components/TodoApp'
import { GestureHandlerRootView } from 'react-native-gesture-handler';

export default function App() {
  return (
    <GestureHandlerRootView>
      <TodoApp />
    </GestureHandlerRootView>
  )
}