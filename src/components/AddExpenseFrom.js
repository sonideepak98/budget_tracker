import React from 'react'
import { v4 as uuidv4 } from 'uuid';
import {useContext,useState} from 'react'
import AppContext from '../context/AppContext';



function AddExpenseFrom() {

    const { dispatch } = useContext(AppContext);

    const [name, setName] = useState('');
    const [cost, setCost] = useState('');

    const onSubmit = (event) => {
    event.preventDefault();
        
        const expense = {
            id: uuidv4(),
            name: name,
            cost: parseInt(cost),
        };

        dispatch({
            type: 'ADD_EXPENSE', payload: expense,
        });
        event.target.reset();
    };

  return (
    <form onSubmit={onSubmit}>
        <div className='row'>
            <div className='col-sm'>
                <label for='name'>Name</label>
                <input required='required'
                className='form-control'
                id='name'
                onInput={(e)=> setName(e.target.value)
                }
                ></input>
                
            </div>
            <div className='col-sm'>
                <label for='cost'>Cost</label>
                    <input required='required'
                    type='text'
                    className='form-control'
                    id='cost'
                    onInput={(e)=> setCost(e.target.value)}
                ></input>
            </div>
        </div>
        <div className='row'>
            <div className='col-sm'>
                <button type='submit' className='btn btn-primary mt-3 width'>Save</button>
            </div>
        </div>
    </form>
  )
}

export default AddExpenseFrom