import redux, { legacy_createStore as createStore  } from 'redux';

const counterReducer = (state = {counter: 0}, action: { type: string; }) => {
    if(action.type === 'increment'){
        return {
            counter: state.counter + 1
        }
    }
    return state;
}
const store = createStore(counterReducer);

export default store;