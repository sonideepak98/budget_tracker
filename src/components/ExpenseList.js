import React ,{useContext} from 'react'
import ExpenseItem from './ExpenseItem'
import AppContext from '../context/AppContext';

function ExpenseList() {

    // const expense = [
    //     {id: 1, name:'shopping', cost: 50},
    //     {id: 2, name:'shopping', cost: 65},
    //     {id: 3, name:'shopping', cost: 200},
    // ];

    const {expenses} = useContext(AppContext);

  return (
    <ul className='list-group'>
        {expenses.map((exp)=>(
            <ExpenseItem id = {exp.id} name = {exp.name} cost = {exp.cost} >
                
            </ExpenseItem>
        ))}
    </ul>
  )
}

export default ExpenseList