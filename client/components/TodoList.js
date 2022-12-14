import {
    SafeAreaView
} from 'react-native';
import DraggableFlatList from 'react-native-draggable-flatlist'
import { todoListStyles } from './styles/TodoList'
import { Item } from './Item';

const TodoList = ({ data, setData,
    toggleCheckBoxesMap, handleCheckBoxToggle, handleDeleteButtonClick }) => {

    const renderItem = ({ item, drag, isActive }) => (
        <Item
            task={item.task}
            drag={drag}
            isActive={isActive}
            handleCheckBoxToggle={() => handleCheckBoxToggle(item.id)}
            handleDeleteButtonClick={() => handleDeleteButtonClick(item.id)}
            checkBoxValue={toggleCheckBoxesMap.get(item.id)}
        />
    );

    return (
        <SafeAreaView style={todoListStyles.toDoListContainer}>
            <DraggableFlatList
                data={data}
                renderItem={renderItem}
                keyExtractor={item => item.id}
                onDragEnd={({ data }) => setData(data)}
                showsVerticalScrollIndicator={false}
            />
        </SafeAreaView>
    );
}

export default TodoList
