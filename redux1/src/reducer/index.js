import {combineReducers} from 'redux';
import films from './movies_reducer';

const rootReducer = combineReducers({
    films
})

export default rootReducer;