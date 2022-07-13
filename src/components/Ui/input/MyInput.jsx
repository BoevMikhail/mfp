import React from 'react'
import сlasses from './MyInput.module.css'

const MyInput = (props) => {
  return (
    <input className={сlasses.MyInput} type='text' {...props}/>
  )
}

export default MyInput