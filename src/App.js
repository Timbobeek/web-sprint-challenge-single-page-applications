import React from "react";
import styled from "styled-components";
import { Route, Switch, Link, useHistory } from "react-router-dom";
import PizzaForm from "./PizzaForm";
import OrderConfirmation from "./OrderConfirmation";

const StyledApp = styled.div`
  background-color: #f58742;
  color: purple;
  display: flex;
  flex-direction: column;
  align-items: center;
  font-family: monospace;
  font-size: 2em;
`;

const StyledHomeButton = styled.button`
  background-color: lime;
  padding: 2%;
  width: 10%;
`;

const App = () => {
  let history = useHistory();

  return (
    <StyledApp>
      <h1>L@mbd@ E@ts</h1>
      <p>Best Pizz@ on the WEB</p>
      <Switch>
        <Route exact path="/">
          <button id="order-pizza" onClick={() => history.push("/pizza")}>
            Press if Hungry
          </button>
          <StyledHomeButton>
            <Link to={`/`}>Home</Link>
          </StyledHomeButton>
        </Route>
        <Route path="/pizza" component={PizzaForm} />
        <Route path="/confirmed" component={OrderConfirmation} />
      </Switch>
    </StyledApp>
  );
};

export default App;
