import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, SafeAreaView, FlatList, TouchableOpacity, CheckBox } from 'react-native';

// todo: change this
const DATA = [
    {
        id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
        title: 'First Item',
    },
    {
        id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
        title: 'Second Item 3ac68afc-c605-48d3-a4f8-fbd91aa97f633ac68afc-c605-48d3-a4f8-fbd91aa97f633ac68afc-c605-48d3-a4f8-fbd91aa97f633ac68afc-c605-48d3-a4f8-fbd91aa97f63',
    },
    {
        id: '58694a0f-3da1-471f-bd96-145571e29d72',
        title: 'Third Item',
    },
];

const Item = ({ task }) => (
    <View style={styles.toDoListItemContainer}>
        <View style={styles.checkBoxAndTaskDescriptionContainer}>
            <CheckBox
                value={true}
            />
            <Text style={styles.taskDescription}>{task}</Text>
        </View>
        <TouchableOpacity>
            <Text>D</Text>
        </TouchableOpacity>
    </View>
);

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
        marginTop: StatusBar.currentHeight || 0,
    },
    toDoListItemContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        width: '85vw',
        paddingVertical: '2vh',
        borderBottomWidth: '0.08em',
        borderColor: '#cccccc'
    },
    checkBoxAndTaskDescriptionContainer: {
        flexDirection: 'row',
        width: '90%'
    },
    checkBox: {
        
    },
    taskDescription: {
        marginLeft: '3vw',
    }

});

export default TodoList