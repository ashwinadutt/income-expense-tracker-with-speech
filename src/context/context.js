import { act } from '@testing-library/react';
import React, { useReducer, createContext} from 'react'

import contextReducer, { ACTION } from './contextReducer.js'

const initialState = [];

export const ExpenseTrackerContext = createContext(initialState);

export const Provider = ({ children}) => {
    const[transactions, dispatch] = useReducer(contextReducer, initialState);

    //Actions  
    const deleteTransaction  = (id) => dispatch({ type: ACTION.DELETE_TRANSACTION, payload: 'id'})

    const addTransaction = transaction => dispatch({ type: ACTION.ADD_TRANSACTION, payload: transaction})

    return(
        <ExpenseTrackerContext.Provider value={{ 
            deleteTransaction,
            addTransaction
        }}>
            {children}
        </ExpenseTrackerContext.Provider>
    )
}