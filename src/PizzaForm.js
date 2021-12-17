import {Link, useRouteMatch} from 'react-router-dom';
import React, {useState, useEffect} from 'react';
import axios from 'axios';

import * as yup from 'yup';

const initialFormValues = {
    name: '',
    size: '',
    topping1: false,
    topping2: false,
    special: ''
}




function PizzaForm(props){

  const{values,submit} = props

  const onSubmit = evt => {
    evt.preventDefault()
    submit()
  }

  return(
    <form className = 'form container' onSubmit={onSubmit}>
      <div className='form submit'>
        <h2>Build your pizza!</h2>
        <button>SUBMIT ORDER</button>
        <button> 
            <Link to={`/`}>Home</Link>
        </button>
      </div>
    </form>
  )
}





export default PizzaForm