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
  return (
    <>
        <h1>Order confirmed!!!</h1>
        <Link to={`/`}>Home</Link>
    </>
  );
}

export default OrderConfirmation;
