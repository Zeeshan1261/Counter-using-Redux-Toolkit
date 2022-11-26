import { useSelector, useDispatch } from "react-redux";

function Counter() {
  const displayState = useSelector((state) => state);
  const dispatch = useDispatch();


  return (
    <>
      <h1>{displayState}</h1>
      <button onClick={() => dispatch({ type: "Increment" })}>Increment</button>
      <button onClick={() => dispatch({ type: "Decrement" })}>Decrement</button>
      <button onClick={() => dispatch({ type: "Reset" })}>Reset</button>
    </>
  );
}
export default Counter;
