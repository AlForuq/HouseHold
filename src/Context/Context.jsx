import React, { createContext, useReducer } from 'react'



const initialState = {
    budget: 3000,
    expenses: [
        
    ],
}

const AppReducer = (state, action) =>{
    switch(action.type){
        case 'ADD_EXPENSE': return {...state, expenses: [...state.expenses, action.payload]};
        case 'ONDELETE' : return {...state, expenses: state.expenses.filter(value => value.id !== action.payload)}
        case 'SET_BUDGET': return {...state, budget: action.payload };
        default: return state

    }

}

export const AppContext = createContext()

export const AppProvider = ({children}) => {
    
    const [state, dispatch] = useReducer(AppReducer,initialState )

    return (
        <AppContext.Provider value={{budget: state.budget, expenses: state.expenses,dispatch}}>
            {children}
        </AppContext.Provider >
  )
}


