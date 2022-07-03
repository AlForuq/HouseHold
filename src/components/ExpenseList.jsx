import React, { useContext } from 'react'
import { AppContext } from '../Context/Context'
import ExpenseItem from './ExpenseItem'
import { Desc } from './ExpenseItemStyle'

const ExpenseList= () => {

  const {budget, expenses} = useContext(AppContext)

  return (
    <ul style={{borderBottom: '2px solid #888'}}  className='list-group'>
      {expenses.map(expense =>{
        if(expense.name === 'Bills'){
          return <div key={expense.id}>
          <ExpenseItem id={expense.id} name={expense.name} cost={expense.cost} />
          
          <div style={{borderBottom: '2px solid #888'}} className=' mrl-5 list-group-item '> 
            <Desc>Gas is ${budget / 100 * expense.cost * 0.5}</Desc> and Total amount used  {budget / 100 * expense.cost * 0.5 / 3.2}m Cube.
            <Desc>Water is ${budget / 100 * expense.cost * 0.3}</Desc> and Total amount used  {budget / 100 * expense.cost * 0.3 / 2.5}Litr. 
            <Desc>Electricity is ${budget / 100 * expense.cost * 0.2}</Desc> and Total amount used  {(budget / 100 * expense.cost * 0.2 /0.34).toFixed(2)}volt <br/>
           
          </div>
          
        </div>
        

        }
        if(expense.name === 'Grocery'){
          return <div key={expense.id}>
          <ExpenseItem id={expense.id} name={expense.name} cost={expense.cost} />
          
          <div style={{borderBottom: '2px solid #888', lineHeight: '30px'}} className=' mrl-5 list-group-item '> 
            <Desc fruit>Apple is ${budget / 100 * expense.cost * 0.1}</Desc> and Total amount Eaten  {Math.floor(budget / 100 * expense.cost * 0.1 / 10)}kg.{' '}
            <Desc fruit>Potato is ${budget / 100 * expense.cost * 0.2}</Desc> and Total amount Eaten  {Math.floor(budget / 100 * expense.cost * 0.2 / 12)}kg.{' '}
            <Desc fruit>Oil is ${budget / 100 * expense.cost * 0.3}</Desc> and Total amount Eaten  {(budget / 100 * expense.cost * 0.3 /30).toFixed(2)}Litr.{' '}
            <Desc fruit>Pasta is ${budget / 100 * expense.cost * 0.4}</Desc> and Total amount Eaten  {Math.floor(budget / 100 * expense.cost * 0.4 /40)}kg.{' '}
            <Desc fruit>Meat is ${budget / 100 * expense.cost * 0.5}</Desc> and Total amount Eaten  {Math.floor(budget / 100 * expense.cost * 0.5 /75)}kg.
           
          </div>
          
        </div>
        }
        
        else{
          return <ExpenseItem id={expense.id} name={expense.name} cost={expense.cost} />
        }
          

      } )}
    </ul>
  )
}

export default ExpenseList

