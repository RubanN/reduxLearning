import React from 'react';
import { useDispatch, useSelector } from "react-redux"
import { vadivelComedyAction, goundamaniComedyAction } from "./index"
import {
  decrement, increment,
  reset,
  logIn,
  logOut,
} from "./Redux/Actions/index"
const App = () => {
  const comdies = useSelector(state => state)
  const counter = useSelector(state => state.counter);
  const auth = useSelector(state => state.auth)
  const dispatch = useDispatch()
  return (
    <>
      {/* <h1>{comdies}</h1>
      <button onClick={() => dispatch(vadivelComedyAction())}>Vadivelu</button>
      <button onClick={() => dispatch(goundamaniComedyAction())}>Goundamani</button> */}
      <h3>Counter</h3>
      <h3>{counter}</h3>
      <button onClick={() => dispatch(increment())}>Increment</button>
      <button onClick={() => dispatch(decrement())}>decrement</button>
      <button onClick={() => dispatch(reset())}>Reset</button>
      <h2>For Logged in users only</h2>
      <button onClick={() => dispatch(logIn())}> Login</button>
      <button onClick={() => dispatch(logOut())}>Logout</button>
      {auth ? "I don't more than 50% of redux. But if you know 50% of it, you're like a Superman." : null}
    </>
  )
}
export default App