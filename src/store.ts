import { configureStore, createAction, createReducer } from "@reduxjs/toolkit";

export interface IReduxStore {
  value: number;
}

const initState: IReduxStore = {
  value: 0,
};

export const addValue = createAction<number>("ADD");
export const increment = createAction("increment");
export const decrement = createAction("decrement");

const myReducer = createReducer(initState, (builder) => {
  builder
    .addCase(addValue, (state, action) => {
      state.value += action.payload;
    })
    .addCase(increment, (state) => {
      state.value++;
    })
    .addCase(decrement, (state) => {
      state.value--;
    });
});

export default configureStore({
  reducer: myReducer,
});
