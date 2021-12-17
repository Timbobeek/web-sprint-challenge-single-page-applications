import {Link, useRouteMatch} from 'react-router-dom';
import React, {useState, useEffect} from 'react';
import axios from 'axios';
import styled from 'styled-components';

import * as yup from 'yup';
import FormSchema from './FormSchema';

const StyledOrder = styled.div`
background-color: yellow;
color: black;
display:flex;
flex-direction: column;
align-items: center;
width: 20em;
`

const initialFormValues = {
    name: '',   /// text input
    size: '',   ///dropdown
    topping1: false,  //checkboxes below
    topping2: false,
    topping3: false,
    topping4: false,
    special: ''    //text input with spec instructions
}

const initialOrders = [];



function PizzaForm(props){

  // const{values, submit} = props

  const [orders, setOrders] = useState(initialOrders);
  const [formValues, setFormValues] = useState(initialFormValues);

  const updateForm = (inputName, inputValue) => {
    setFormValues({ ...formValues, [inputName]: inputValue });
  }


  const onChange = evt => {
    const { name, value, checked, type } = evt.target;
    
    const valueToUse = type === 'checkbox' ? checked : value;
    console.log(evt, name, valueToUse)
    // if ()

    updateForm(name, valueToUse);
  }

  const onSubmit = evt => {
    evt.preventDefault()
    console.log(formValues);
    // submit()
  }

  return(
    
    <form className = 'form container' onSubmit={onSubmit}>
      <button> 
            <Link to={`/`}>Home</Link>
      </button>
      <div id='pizza-form'>
        <StyledOrder>

      <h1>Build your pizza!</h1>

        <label>Your Name
              <input id='name-input'
                name="name"
                type="text"
                placeholder="Type your name"
                maxLength="15"
                value={formValues.name}
                onChange={onChange}
              />
        </label>

        <label>Size
              <select id="size-dropdown" onChange={onChange} name="size"
                  >
                <option value="">-- Select a Size --</option>
                <option value="S">Small</option>
                <option value="M">Medium</option>
                <option value="L">Large</option>
                <option value="XL">ExtraLarge</option>
              </select>
        </label>

        <h2>Choose your toppings!!!</h2>

        <label>Topping1
          <input
            onChange={onChange}
            name='topping1'
            type='checkbox'
          />
        </label>

        <label>Topping2
          <input
            onChange={onChange}
            name='topping2'
            type='checkbox'
          />
        </label>

        <label>Topping3
          <input
            onChange={onChange}
            name='topping3'
            type='checkbox'
          />
        </label>

        <label>Topping4
          <input
            onChange={onChange}
            name='topping4'
            type='checkbox'
          />
        </label>

        <label>Special Instructions
              <input id='special-text'
                name="special"
                type="text"
                placeholder="Anything else?"
                maxLength="100"
                // value={values.name}
                onChange={onChange}
              />
        </label>



      <div className='form submit'>
        <button>SUBMIT ORDER</button>
      </div>
      </StyledOrder>
      </div>
    </form>
  )
}





export default PizzaForm