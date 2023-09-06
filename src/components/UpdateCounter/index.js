import React from 'react';
import useAppState from '../../hooks';
import {UPDATE_VALUE_TO_ADD, ADD_TO_COUNT } from '../../context';

const UpdateCounter = ()=>{
    const {state, dispatch} = useAppState();
    const updateCounter = ()=>{
        dispatch({
            type: ADD_TO_COUNT,
        })
    }
    const updateValueToAdd = (valueToAdd)=>{
        dispatch({
            type: UPDATE_VALUE_TO_ADD,
            payload: valueToAdd,
        })
    }
    const handleInputChange = (e)=>{
        updateValueToAdd(parseInt(e.target.value) || 0);
    };
    const handleFormSubmit = (e)=>{
        e.preventDefault();
        updateCounter();
        updateValueToAdd(0);
    };
    return(
        <form onSubmit={handleFormSubmit}>
            <input type='number' onChange={handleInputChange} value={state.valueToAdd || ''}/>
            <button>Submit</button>
        </form>
    )
};

export default UpdateCounter;