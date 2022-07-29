import React from 'react'
import {TiDelete} from 'react-icons/ti'
import {useContext} from 'react'
import AppContext from '../context/AppContext';

function ExpenseItem(props) {

  const { dispatch } = useContext(AppContext);

const DeleteExpense = () => {
  dispatch({
    type: 'DELETE_EXPENSE',
    payload: props.id,
  });
};

  return (
        <li className='list-group-item d-flex justify-content-between align-items-center'>
          {props.name}
          <div>
          <span>
            Rs.{props.cost}
          </span>
          <TiDelete size='2rem' onClick={DeleteExpense} ></TiDelete>
          </div>
        </li>
  )
}

export default ExpenseItem