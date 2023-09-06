import React from "react";
import UpdateCounter from "../UpdateCounter";
import useAppState from "../../hooks";
import {INCREMENT_COUNT, DECREMENT_COUNT } from '../../context';

const App = ()=>{
    const {state, dispatch} = useAppState();
    const incrementCounter = ()=>{
        dispatch({
            type: INCREMENT_COUNT,
        })
    };
    const decrementCounter = ()=>{
        dispatch({
            type: DECREMENT_COUNT,
        })
    };
    
    return (
        <>
            <p>The counter value is {state.counter}</p>
            <button onClick={incrementCounter}>Increment Counter</button>
            <button onClick={decrementCounter}>Decrement Counter</button>
            <br></br>
            <UpdateCounter />
        </>
    )
};

export default App;