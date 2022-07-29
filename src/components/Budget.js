import React from 'react'
import {useContext} from 'react'
import AppContext from '../context/AppContext';

function Budget() {
  const {budget} = useContext(AppContext);
  return (
    <div className='alert alert-secondary'>
      <span>Budget: Rs. {budget}</span>
    </div>
  )
}

export default Budget