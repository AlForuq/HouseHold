import React, { useContext } from 'react'
import { AppContext } from '../Context/Context'
const ExpenseTotal = () => {

  const {budget, expenses} = useContext(AppContext)

  const Spent = expenses.reduce((spending, item) =>{
    return  spending = spending+ (budget /100 * item.cost)
  },0)

  return (
    <div className='alert alert-primary'>
        <span>Spent so far ${Spent}</span>
    </div>
  )
}

export default ExpenseTotal
