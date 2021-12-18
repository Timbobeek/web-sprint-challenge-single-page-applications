import { Link } from "react-router-dom";
// import React, { useState, useEffect } from "react";
import styled from "styled-components";

const StyledOrder = styled.div`
  background-color: yellow;
  color: black;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 20em;
`;

function OrderConfirmation(props) {
  const { location: {state} } = props
  // console.log(state)
//   {
//     "name": "123123",
//     "size": "S",
//     "topping1": false,
//     "topping2": false,
//     "topping3": false,
//     "topping4": true,
//     "special": ""
// }

  const topping = (value) => value ? "Yes" : "No";

  return (
    <>
        <h1>Congrats! Pizza is on it's way!</h1>
        <h2>Your order:</h2>
        <ul>
          <li>Order ID: {state.id}</li>
          <li>Name: {state.name}</li>
          <li>Size {state.size}</li>
          <li>Tomatoes {topping(state.topping1)}</li>
          <li>Peppers {topping(state.topping2)}</li>
          <li>Mushrooms {topping(state.topping3)}</li>
          <li>Pineapple {topping(state.topping4)}</li>
          <li>Special: {state.special}</li>
        </ul>
        <Link to={`/`}>Home</Link>
    </>
  );
}

export default OrderConfirmation;
