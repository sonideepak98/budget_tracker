import React , {useReducer} from "react";
import { createContext } from "react";

const initialState = {
    budget: 2000,
    expenses: [
    { id: 12, name: 'shopping', cost: 40 },
    { id: 13, name: 'holiday', cost: 400 },
    { id: 14, name: 'car service', cost: 50 },
    ],
};

const AppReducer = (state, action) => {
    if(action.type === 'ADD_EXPENSE'){
        // state.expenses.push(action.payload);
        // return state;
        return {
            ...state,
            expenses: [...state.expenses, action.payload],
            };
    }else if(action.type === 'DELETE_EXPENSE'){
        const expenses = state.expenses.filter((expense)=>action.payload !== expense.id)
        return {...state,expenses:expenses}
    }
    else
        return state;
}
    
    const AppContext = createContext();

    export default AppContext;

export const AppProvider = (props) => {
    const [state, dispatch] = useReducer(AppReducer, initialState);
    
    return (
    <AppContext.Provider
        value={{
        budget: state.budget,
        expenses: state.expenses,
        dispatch,
        }}
        >
        {props.children}
        </AppContext.Provider>
    );
};