import React, { useContext } from 'react'
import {AppContext} from '../Context/Context'

const Remaining = () => {

  const {expenses, budget} = useContext(AppContext)

  const Total = expenses.reduce((sum, item) =>{
    return sum+= budget / 100 * item.cost 
  }, 0)

  const alertType = ()=>{

    if(budget >= Total){
      return 'alert-success'
    }
    else if(budget < Total){
      return 'alert-danger'
    }
  } 

  const other=()=>{
    if(budget < Total){
     return alert(`Not Enough Budget and you have $${budget - Total} dept`)
    }
  }
  other()

  
  return (
    <div className={`alert ${alertType()}`}>
        <span>Saving: ${budget - Total}</span>
    </div>
  )
}

export default Remaining
