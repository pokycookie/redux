import { shallowEqual, useDispatch, useSelector } from "react-redux";
import { decrement, increment, IReduxStore } from "./store";

function App() {
  const dispatch = useDispatch();
  const value = useSelector<IReduxStore, number>((state) => {
    return state.value;
  }, shallowEqual);

  return (
    <div className="App" style={{ display: "flex" }}>
      <button
        onClick={() => {
          dispatch(decrement());
        }}
      >
        -
      </button>
      <p>{value}</p>
      <button
        onClick={() => {
          dispatch(increment());
        }}
      >
        +
      </button>
    </div>
  );
}

export default App;
