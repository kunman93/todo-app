import TodoApp from './components/TodoApp'
import { useFonts } from 'expo-font';

export default function App() {
  const [loadedFont] = useFonts({
   'FuzzyBubblesRegular': require('./assets/fonts/FuzzyBubbles-Regular.ttf')
  });

  if (!loadedFont) {
    return null;
  }

  return (
    <TodoApp />
  )
}


