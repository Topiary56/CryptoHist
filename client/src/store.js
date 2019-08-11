import { createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './reducers';
import { composeWithDevTools } from 'redux-devtools-extension';


const initialState = {};

const Middleware = [thunk];

const store = createStore(
    rootReducer,
    initialState,
    composeWithDevTools(
    applyMiddleware(...Middleware)
    //,    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    )
);

export default store;
