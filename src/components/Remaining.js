import React from 'react'
import AppContext from '../context/AppContext';
import {useContext} from 'react'

function Remaining() {

  const { expenses, budget } = useContext(AppContext);

const totalExpenses = expenses.reduce((total, item) => {
  return (total = total + item.cost);
}, 0);

const alertType = totalExpenses > budget ? 'alert-danger' : 'alert-success';

  return (
    <div className={`alert ${alertType}`}>
      <span>Remaining: Rs.{budget - totalExpenses}</span>
    </div>
  )
}

export default Remaining