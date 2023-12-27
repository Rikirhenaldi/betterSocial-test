import {combineReducers} from 'redux';
import {persistReducer} from 'redux-persist';
import AsyncStorage from '@react-native-async-storage/async-storage';
import content from './content';


const persistContent = {
  storage: AsyncStorage,
  key: 'content',
};


const reducer = combineReducers({
  content: persistReducer(persistContent, content)
});

export default reducer;