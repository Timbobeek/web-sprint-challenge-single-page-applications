import { Link } from "react-router-dom";

function OrderConfirmation(props) {
  const { location: {state} } = props

  const topping = (value) => value ? "Yes" : "No";

  if (!state) {
    return (<></>)
  }

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
