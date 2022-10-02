# Redux 기초

## In vanilla JS(TS)

```typescript
import { createStore } from "redux";

// Reducer: data를 update할 수 있는 유일한 함수
const reducer = (state = defaultValue, action) => {
  switch (action.type) {
    case "add":
      return state + 1;
    case "sub":
      return state - 1;
    default:
      return state;
  }
};

const store = createStore(reducer);

// action으로 사용할 object에는 type property가 반드시 존재해야 함
store.dispatch({ type: "add" });
store.dispatch({ type: "sub" });

store.subscribe(() => console.log(store.getState()));
```

### createStore object

- dispatch(): state를 업데이트 하기 위한 트리거
- subscribe(): state가 업데이트 되었는지 확인
- getState(): state를 확인
- replaceReducer()
