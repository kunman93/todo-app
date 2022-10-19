import 'react-native-get-random-values'
import { v4 as uuidv4 } from 'uuid';

export const defineEventHandler = (data, setData,
  toggleCheckBoxesMap, setToggleCheckBoxesMap,
  taskDescription, setTaskDescription) => {

  const onCheckBoxToggle = (itemId) => {
    updateToggleCheckBoxesMap(itemId);
    updateIsCheckedInData(itemId);
  };

  const updateToggleCheckBoxesMap = (itemId) => {
    let currentToggleCheckBoxesMap = new Map(toggleCheckBoxesMap);
    currentToggleCheckBoxesMap.set(itemId, !currentToggleCheckBoxesMap.get(itemId));
    setToggleCheckBoxesMap(currentToggleCheckBoxesMap);
  };

  const updateIsCheckedInData = (itemId) => {
    let currentData = [...data];
    currentData.forEach((data) => {
      if (data.id === itemId) {
        data.isChecked = !data.isChecked;
      }
    });
    setData(currentData);
  };

  const onDeleteButtonClick = (itemId) => {
    deleteItemInData(itemId);
    deleteEntryFromToggleCheckBoxesMap(itemId);
  };

  const deleteItemInData = (itemId) => {
    let currentData = [...data];
    currentData = currentData.filter((data) => data.id !== itemId);
    setData(currentData);
  };

  const deleteEntryFromToggleCheckBoxesMap = (itemId) => {
    let currentToggleCheckBoxesMap = new Map(toggleCheckBoxesMap);
    currentToggleCheckBoxesMap.delete(itemId);
    setToggleCheckBoxesMap(currentToggleCheckBoxesMap);
  };

  const onAddButtonClick = () => {
    if(!taskDescription) {
      return
    }
    let itemId = uuidv4();
    addNewItemInData(itemId);
    addNewEntryInToggleCheckBoxesMap(itemId);
  };

  const addNewItemInData = (itemId) => {
    let currentData = [...data];
    let newTask = {
      id: itemId,
      task: taskDescription,
      isChecked: false
    };
    currentData.push(newTask);
    setData(currentData);
  };

  const addNewEntryInToggleCheckBoxesMap = (itemId) => {
    let currentToggleCheckBoxesMap = new Map(toggleCheckBoxesMap);
    currentToggleCheckBoxesMap.set(itemId, false);
    setToggleCheckBoxesMap(currentToggleCheckBoxesMap);
  };

  return [onAddButtonClick, onCheckBoxToggle, onDeleteButtonClick];
};
