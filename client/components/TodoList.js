import {
    SafeAreaView} from 'react-native';
import { useState } from 'react';
import DraggableFlatList from 'react-native-draggable-flatlist'
import { todoListStyles } from './styles/TodoList' 
import { Item } from './Item';


// todo: change this
const DATA = [
    {
        id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
        title: 'First Item First ItemFirstFirstItemFirstFirstItemFirstFirst Item Item',
    },
    {
        id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
        title: 'Second Item Second Item Second ItemSecond ItemSecond ItemSecond ItemSecond Item',
    },
    {
        id: '58694a0f-3da1-471f-bd96-145571e29d72',
        title: 'Third Item  Third ItemThird ItemThird ItemThird ItemThird ItemThird ItemThird Item',
    },
    {
        id: '58694a0f-3da1-471f-bd96-145571e29d73',
        title: 'Fourth Item Fourth Item Fourth Item Fourth ItemFourth Item',
    },
    {
        id: '58694a0f-3da1-471f-bd96-145571e29d74',
        title: 'Fifth Itemadsfasdfadsfasdfasdfasdfasdfasdfsa',
    },
];

const TodoList = () => {
    const [data, setData] = useState(DATA);

    const renderItem = ({ item, drag, isActive }) => (
        <Item
            task={item.title}
            drag={drag}
            isActive={isActive} />
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
