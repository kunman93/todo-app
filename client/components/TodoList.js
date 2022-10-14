import { StyleSheet, Text, View, SafeAreaView, FlatList, TouchableOpacity } from 'react-native';
import CheckBox from '@react-native-community/checkbox'
import { useState } from 'react';
import { vh, vw } from 'react-native-css-vh-vw'
//import { DraggableFlatList} from 'react-native-draggable-flatlist'

// todo: change this
const DATA = [
    {
        id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
        title: 'First Item',
    },
    {
        id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
        title: 'Second Item',
    },
    {
        id: '58694a0f-3da1-471f-bd96-145571e29d72',
        title: 'Third Item',
    },
];

const Item = ({ task }) => {
    const [toggleCheckBox, setToggleCheckBox] = useState(false)

    return (
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
    );
}
const TodoList = () => {
    const renderItem = ({ item }) => (
        <Item task={item.title} />
    );

    return (
        <SafeAreaView style={styles.toDoListContainer}>
            <FlatList
                data={DATA}
                renderItem={renderItem}
                keyExtractor={item => item.id}
            />
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    toDoListContainer: {
    },
    toDoListItemContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        width: vw(85),
        paddingVertical: vh(3),
        borderBottomWidth: 0.8,
        borderColor: '#cccccc'
    },
    checkBoxAndTaskDescriptionContainer: {
        flexDirection: 'row',
        width: '90%'
    },
    checkBox: {
    },
    taskDescription: {
        marginLeft: vw(3),
        fontFamily: 'FuzzyBubblesRegular',
        fontSize: vh(2.5),
    },
    deleteButton: {
        marginRight: vw(3)
    }
});

export default TodoList
