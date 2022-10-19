import {StyleSheet} from 'react-native'
import { vh, vw } from 'react-native-css-vh-vw'

export const todoAppStyles = StyleSheet.create({
  toDoAppcontainer: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'center',
    height: '100%',
    width: '100%',
    backgroundColor: '#f2f2f2',
  },
  title: {
    fontFamily: 'FuzzyBubbles-Regular',
    fontSize: vh(8),
    marginTop: vh(2),
  },
});