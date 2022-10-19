import { Text, View, TouchableOpacity } from 'react-native';
import CheckBox from '@react-native-community/checkbox';
import { useState } from 'react';
import { ScaleDecorator } from 'react-native-draggable-flatlist';
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import { itemStyles } from './styles/Item';

export const Item = ({ task, drag, isActive }) => {
    const [toggleCheckBox, setToggleCheckBox] = useState(false);

    return (
        <ScaleDecorator>
            <TouchableOpacity
                activeOpacity={1}
                onLongPress={drag}
                disabled={isActive}
                style={{
                    backgroundColor: isActive ?
                        itemStyles.touchableItemContainerOnLongPress.backgroundColor :
                        itemStyles.touchableItemContainer.backgroundColor
                }}>
                <View style={itemStyles.toDoListItemContainer}>
                    <View style={itemStyles.checkBoxAndTaskDescriptionContainer}>
                        <CheckBox
                            disabled={false}
                            value={toggleCheckBox}
                            onValueChange={(newValue) => setToggleCheckBox(newValue)}
                            style={itemStyles.checkBox} />
                        <Text style={itemStyles.taskDescription}>{task}</Text>
                    </View>
                    <TouchableOpacity style={itemStyles.deleteButton}>
                        <Icon
                            name="delete"
                            size={itemStyles.deleteButton.fontSize}
                            color={itemStyles.deleteButton.color} />
                    </TouchableOpacity>
                </View>
            </TouchableOpacity>
        </ScaleDecorator>
    );
};