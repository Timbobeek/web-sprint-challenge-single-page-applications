import React, {useState, useEffect} from "react";
import styled from "styled-components";
import axios from 'axios';
import {Route, Switch, Link, useRouteMatch} from 'react-router-dom';
import PizzaForm from "./PizzaForm";


const StyledApp = styled.div`
background-color: #f58742;
color: purple;
display:flex;
flex-direction: column;
align-items: center;
`

const App = () => {
  return (
    <StyledApp>
      <h1>Lambda Eats</h1>
      <p>Best Pizza on the WEB</p>
      

      <Switch>
        <Route path='/pizza'>
          <PizzaForm/>
        </Route>
        <Route path='/'>
          <button id='order-pizza'> 
            <Link to={`/pizza`}>Press if Hungry </Link>
          </button>
          <button> 
            <Link to={`/`}>Home</Link>
          </button>
        </Route>
      </Switch>
    </StyledApp>
  );
};
export default App;
