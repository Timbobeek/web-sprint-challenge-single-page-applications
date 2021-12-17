import React, {useState, useEffect} from "react";
import styled from "styled-components";
import axios from 'axios';
import {Route, Switch, Link, useRouteMatch} from 'react-router-dom';
import PizzaForm from "./PizzaForm";
import OrderConfirmation from "./OrderConfirmation";


const StyledApp = styled.div`
background-color: #f58742;
color: purple;
display:flex;
flex-direction: column;
align-items: center;
font-family: monospace;
font-size: 2em;
`

const StyledHomeButton = styled.button`
background-color: lime;
padding: 2%;
width: 10%;
`

const App = () => {
  return (
    <StyledApp>
      <h1>L@mbd@ E@ts</h1>
      <p>Best Pizz@ on the WEB</p>
      

      <Switch>
        <Route path='/pizza'>
          <PizzaForm />
        </Route>
        <Route path='/confirmed'>
          <OrderConfirmation />
        </Route>
        <Route path='/'>
          <button id='order-pizza'> 
            <Link to={`/pizza`}>Press if Hungry </Link>
          </button>
          <StyledHomeButton> 
            <Link to={`/`}>Home</Link>
          </StyledHomeButton>
        </Route>
      </Switch>
    </StyledApp>
  );
};
export default App;
