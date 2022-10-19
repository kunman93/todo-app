import {StyleSheet} from 'react-native'
import { vh, vw } from 'react-native-css-vh-vw'

export const itemStyles = StyleSheet.create({
    touchableItemContainer: {
        backgroundColor: '#f2f2f2'
    },
    touchableItemContainerOnLongPress: {
        backgroundColor: '#DDDDDD'
    },
    toDoListItemContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        width: vw(90),
        paddingVertical: vh(4),
        borderTopWidth: 0.8,
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
        fontSize: vh(5.0),
        color: '#cc0000'
    }
});