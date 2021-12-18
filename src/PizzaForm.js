import {Link, useRouteMatch, useHistory} from 'react-router-dom';
import React, {useState, useEffect} from 'react';
import axios from 'axios';
import styled from 'styled-components';

import * as yup from 'yup';
import FormSchema from './FormSchema';
import { Redirect } from 'react-router-dom/cjs/react-router-dom.min';

const StyledOrder = styled.div`
background-color: yellow;
color: black;
display:flex;
flex-direction: column;
align-items: center;
width: 20em;
`

const StyledErrors = styled.div`
color: red;
margin-top: 1em;
margin-bottom: 1em;
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

const initialFormErrors = {
  name: '',
}

const initialOrders = [];
const initialDisabled = true;

//Validation for name and the error message is "name must be at least 2 characters"


function PizzaForm(props){

  // const{values, submit} = props

  // const [orders, setOrders] = useState(initialOrders);
  const [formValues, setFormValues] = useState(initialFormValues);
  const [formErrors, setFormErrors] = useState(initialFormErrors);
  const [disabled, setDisabled] = useState(initialDisabled);

  let history = useHistory();

  const updateForm = (inputName, inputValue) => {
    setFormValues({ ...formValues, [inputName]: inputValue });
  }


  const onChange = evt => {
    const { name, value, checked, type } = evt.target;
    
    const valueToUse = type === 'checkbox' ? checked : value;
    // console.log(evt, name, valueToUse)
    // if ()

    validate(name, value);
    updateForm(name, valueToUse);
  }

  const onSubmit = evt => {
    evt.preventDefault()
    console.log(formValues);

    axios.post('https://reqres.in/api/orders', formValues)
      .then(res => {

        console.log(res.data)

        setFormValues(initialFormValues);
        
        // go to confirmation
        history.push("/confirmed", res.data)
      })
      .catch(err =>
        console.log(err)
      )

    // submit()
  }

  const validate = (name, value) => {
    yup.reach(FormSchema, name)
      .validate(value)
      .then(() => setFormErrors({ ...formErrors, [name]: '' }))
      .catch(err => setFormErrors({ ...formErrors, [name]: err.errors[0] }))
  }

  // useEffect(() => {
  //   FormSchema.isValid(formValues).then(valid => {
  //     // console.log('valid:', valid)
  //     // console.log('disable?:', !valid)
  //     setDisabled(!valid)
  //   })
  // }, [formValues])
  
  const {path, url} = useRouteMatch();

  // console.log(path, url)


  return(
    
    <form className = 'form container' onSubmit={onSubmit}>
      <button id='order-button'> 
          <Link to={'/'}>Home</Link>
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
              // errors={formErrors}
              // change={inputChange}
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

        <label>Tomatoes
          <input
            onChange={onChange}
            name='topping1'
            type='checkbox'
          />
        </label>

        <label>Peppers
          <input
            onChange={onChange}
            name='topping2'
            type='checkbox'
          />
        </label>

        <label>Mushrooms
          <input
            onChange={onChange}
            name='topping3'
            type='checkbox'
          />
        </label>

        <label>Pineapple
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

      <StyledErrors id="errors">{formErrors.name}</StyledErrors>

      <div className='form submit'>
        <button>SUBMIT ORDER</button>
      </div>
      </StyledOrder>
      </div>
    </form>
  )
}


export default PizzaForm