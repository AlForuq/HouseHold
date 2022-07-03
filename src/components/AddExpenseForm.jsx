import React, { useContext, useState } from 'react'
import { v4 as uuidv4 } from 'uuid'
import { AppContext } from '../Context/Context'
import { Div } from './ExpenseItemStyle'
const AddExpenseForm = () => {

  const { budget, dispatch} = useContext(AppContext)

  const [name, setName] = useState('')
  const [cost, setCost] = useState('')

  const boss = (e) =>{
    e.preventDefault();

    if(name.length){
      const expense = {
        id: uuidv4(),
        name: name,
        cost: parseInt(cost),
      }
      
      dispatch({
        type: 'ADD_EXPENSE',
        payload: expense, 
      })
      setName('')
      setCost('')
    }
  }

  return (
    <form >
          <div className='row'>
            <Div className='col-sm'>

                <label for='name'>Name of Bill</label>

               <select  onChange={(e)=> setName(e.target.value)  } id='name' >
                  <option value=''>Select the bill</option>

                  <option value='Grocery'>Grocery</option>
                  <option value='Bills'>Bills</option>
                  <option value='Tax'>Tax</option>
                  
              </select>
            </Div>
            <div className='col-sm'>
                <label for='cost'>IN PERCENTAGE</label>
                <input placeholder='Expense in Percentage' onChange={(e)=> setCost(e.target.value)} required='required' type='text' className='form-control' id='cost' value={cost} />
                
            </div>
            <div className='col-sm mt-3'>
              <button onClick={boss} type='submit' className='btn btn-primary'>Save</button>
            </div>
          </div>
      
    </form>
    
  )
}

export default AddExpenseForm
