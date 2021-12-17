import {Link, useRouteMatch} from 'react-router-dom';
import React, {useState, useEffect} from 'react';
import axios from 'axios';

import * as yup from 'yup';

const initialFormValues = {
    name: '',   /// text input
    size: '',   ///dropdown
    topping1: false,  //checkboxes below
    topping2: false,
    topping3: false,
    topping4: false,
    special: ''    //text input with spec instructions
}




function PizzaForm(props){

  const{values, update, submit} = props

  const onChange = evt => {
    const name = evt.target.name;
    const { value } = evt.target;
    update(name, value);
  }

  const onSubmit = evt => {
    evt.preventDefault()
    submit()
  }

  return(
    <form className = 'form container' onSubmit={onSubmit}>
      <div className='form-group inputs'>
        <button> 
            <Link to={`/`}>Home</Link>
        </button>
      <h1>Build your pizza!</h1>

        <label>Name
              <input id='name-input'
                name="name"
                type="text"
                placeholder="Type your name"
                maxLength="15"
                // value={values.name}
                onChange={onChange}
              />
        </label>


        <label>Size
              <select id="size-dropdown" onChange={onChange}>
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
                placeholder="Anything else you want to add?"
                maxLength="100"
                // value={values.name}
                onChange={onChange}
              />
        </label>



      <div className='form submit'>
        <button>SUBMIT ORDER</button>
      </div>
      </div>
    </form>
  )
}





export default PizzaForm