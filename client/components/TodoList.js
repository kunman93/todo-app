import { StyleSheet, Text, View, SafeAreaView, FlatList, TouchableOpacity, TouchableHighlight } from 'react-native';
import CheckBox from '@react-native-community/checkbox'
import { useState } from 'react';
import { vh, vw } from 'react-native-css-vh-vw'
import DraggableFlatList from 'react-native-draggable-flatlist'


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

const Item = ({ task, drag }) => {
    const [toggleCheckBox, setToggleCheckBox] = useState(false)

    return (
        <TouchableHighlight onLongPress={drag} underlayColor="#DDDDDD">
            <View style={styles.toDoListItemContainer}>
                <View style={styles.checkBoxAndTaskDescriptionContainer}>
                    <CheckBox
                        disabled={false}
                        value={toggleCheckBox}
                        onValueChange={(newValue) => setToggleCheckBox(newValue)}
                    />
                    <Text style={styles.taskDescription}>{task}</Text>
                </View>
                <TouchableOpacity style={styles.deleteButton}>
                    <Text>D</Text>
                </TouchableOpacity>
            </View>
        </TouchableHighlight>
    );
}
const TodoList = () => {
    const [data, setData] = useState(DATA);

    const renderItem = ({ item , drag}) => (
        <Item task={item.title}
                drag={drag} />
    );

    return (
        <SafeAreaView style={styles.toDoListContainer}>
            <DraggableFlatList
                data={data}
                renderItem={renderItem}
                keyExtractor={item => item.id}
                onDragEnd={({ data }) => setData(data)}
            />
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    toDoListContainer: {
        flex: 1
    },
    toDoListItemContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        width: vw(90),
        paddingVertical: vh(3),
        borderBottomWidth: 0.8,
        borderColor: '#cccccc',
    },
    checkBoxAndTaskDescriptionContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        width: '85%',
    },
    checkBox: {
    },
    taskDescription: {
        marginLeft: vw(3),
        fontFamily: 'FuzzyBubbles-Regular',
        fontSize: vh(3.5),
        maxWidth: '85%'
    },
    deleteButton: {
        marginRight: vw(3),
    }
});

export default TodoList
