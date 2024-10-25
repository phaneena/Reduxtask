import React from 'react'
import { useSelector } from 'react-redux'

const Show = () => {
    const {count}=useSelector(state=>state.counts)
  return (
    <div>
       <p>count of success {count}</p> 
    </div>
  )
}

export default Show