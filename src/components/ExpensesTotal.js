import React,{useContext} from 'react'
import AppContext from '../context/AppContext'

function ExpensesTotal() {

  const {expenses} = useContext(AppContext);

  function calculateTotal(){
    const total = expenses.reduce((curr,acc)=>{
      curr += acc.cost;
      return curr;
    },0)
    return total;
  }

  return (
    <div className='alert alert-primary'>
        ExpensesTotal : Rs.{calculateTotal()}
    </div>
  )
}

export default ExpensesTotal