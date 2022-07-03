import React, { useContext, useState } from 'react'
import {TiDelete} from 'react-icons/ti'
import { AppContext } from '../Context/Context'
import { BTN, LI, Span, SPN } from './ExpenseItemStyle'



const ExpenseItem = (props) => {


  console.log(props.id)
  const {budget, dispatch} = useContext(AppContext)

  const onDelete = () => {
    dispatch({
      type: 'ONDELETE',
      payload: props.id
      
    })
  }
  
  const [content, setContent] = useState('')
  const [show, setShow] = useState('')

  const findcost = ()=>{
    if(content === 'Apple' || content === 'apple'){
       setShow(budget / 100 * props.cost * 0.1)
    }
    else if(content === 'Potato' || content === 'potato'){
      setShow(budget / 100 * props.cost * 0.2)
    }
    else if(content === 'Oil' || content === 'oil'){
      setShow(budget / 100 * props.cost * 0.3)
    }
    else if(content === 'Pasta' || content === 'pasta'){
      setShow(budget / 100 * props.cost * 0.4)
    }
    else if(content === 'meat' || content === 'Meat'){
      setShow(budget / 100 * props.cost * 0.5)
    }
    else if(content === 'Gas' || content === 'gas'){
      setShow(budget / 100 * props.cost * 0.5)
    }
    else if(content === 'electricity' || content === 'Electricity'){
      setShow(budget / 100 * props.cost * 0.2)
    }
    else if(content === 'Water' || content === 'water'){
      setShow(budget / 100 * props.cost * 0.3)
    }else{
      setShow(' NOT available')
    }
  }

  return (
    
      <>
     
      <li className='list-group-item d-flex justify-content-between align-items-center'  >
          <Span>{props.name}</Span> Are { props.cost}% of total Budget.  
          <div> And It will be {'  '}
              <Span>
                  ${budget / 100 * props.cost}
              </Span>
              <TiDelete size='1.5em' onClick={onDelete}/>
              
          </div>
          
      </li >
      <LI className='list-group-item'>
          <input style={{borderRadius: '7px'}} onChange={(e)=> setContent(e.target.value)} placeholder='Name of the Product' />
          <BTN onClick={findcost}>Show the cost</BTN>
          <SPN>${show}</SPN>
      </LI>
      </>

      
    
  )
}

export default ExpenseItem
