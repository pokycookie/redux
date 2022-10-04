# Redux 기초

## In vanilla JS(TS)

```bash
npm i redux
```

```typescript
import { createStore } from "redux";

// Reducer: data를 update할 수 있는 유일한 함수
const reducer = (state = defaultValue, action) => {
  switch (action.type) {
    case "add":
      return state + 1;
    case "sub":
      return state - 1;
    case "replace":
      return action.value;
    // state가 배열이나 객체일 경우, 항상 새로운 배열, 객체를 반환해야 한다.
    // ex) state.push() 불가; React의 state관리와 동일함
    // ex) return [...state, {value: action.value}]
    default:
      return state;
  }
};

// Redux store
const store = createStore(reducer);

// action으로 사용할 object에는 'type' property가 반드시 존재해야 함
store.dispatch({ type: "add" });
store.dispatch({ type: "sub" });
store.dispatch({ type: "replace", value: 5 });

store.subscribe(() => console.log(store.getState()));
```

### createStore object

- dispatch(): state를 업데이트 하기 위한 트리거
- subscribe(): state가 업데이트 되었는지 확인
- getState(): state를 확인
- replaceReducer()

## In React

```bash
npm i redux
npm i react-redux
npm i @reduxjs/toolkit
```

```bash
# Redux + TypeScript template
npx create-react-app my-app --template redux-typescript
```

#### store.ts

```typescript
import { createStore } from "redux";

export const addData = (text: string) => {
  return { type: "add", text };
};

const reducer = (state: string[] = [], action) => {
  switch (
    action.type
    // action switch
  ) {
  }
};

const store = createStore(reducer);

export default store;
```

#### index.tsx

```typescript
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { Provider } from "react-redux";
import store from "./store";

const root = ReactDOM.createRoot(document.getElementById("root") as HTMLElement);
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);
```

#### App.tsx

```typescript
export default function App() {
  const dispatch = useDispatch();
  const count = useSelector();

  return (
    <div className="App">
      <ul></ul>
    </div>
  );
}
```

## @reduxjs.toolkit
