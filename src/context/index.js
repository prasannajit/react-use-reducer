import { createContext, useReducer } from "react";
import { produce } from "immer";

export const INCREMENT_COUNT = 'increment-count';
export const DECREMENT_COUNT = 'decrement-count';
export const ADD_TO_COUNT = 'add-to-count';
export const UPDATE_VALUE_TO_ADD = 'update-value-to-add'

const reducer = (state, action)=>{
    switch(action.type){
        case INCREMENT_COUNT:
            // return {
            //     ...state,
            //     counter: state.counter + 1,
            // }
            state.counter = state.counter+1;
            return;
        case DECREMENT_COUNT:
            // return {
            //     ...state,
            //     counter: state.counter - 1,
            // }
            state.counter = state.counter-1;
            return;
        case ADD_TO_COUNT:
            // return {
            //     ...state,
            //     counter: state.counter + state.valueToAdd,
            // }
            state.counter = state.counter+state.valueToAdd;
            return;
        case UPDATE_VALUE_TO_ADD:
            // return {
            //     ...state,
            //     valueToAdd: action.payload,
            // }
            state.valueToAdd = action.payload;
            return;
        default:
            return state;
    }
};

const AppContext = createContext();

export const Provider = ({children})=>{
    const [state, dispatch] = useReducer(produce(reducer),{
        counter: 0,
        valueToAdd: 0,
    });
    return (
        <AppContext.Provider value={{state,dispatch}}>
            {children}
        </AppContext.Provider>
    )
};

export default AppContext;