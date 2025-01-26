---
title: "Write Cleaner Reducers"
description: "Simple rules to make your reducers more maintainable."
date: "08/19/2019"
---

This post was previously published on [Medium](https://betterprogramming.pub/write-cleaner-reducers-1c433a94a166).

![Banner](./banner.webp)

## Introduction

So, what is a reducer?

It’s a pure function that takes current state and action and returns a new state based on them. That’s it!

The idea of reducers was greatly popularized in the React ecosystem by Redux library, and nowadays it’s pretty much the standard way of thinking about application state.

In this piece, we’ll examine the famous Counter app example and it’s reducer to see what can we do to make it nice and tidy. In the end, we’ll see how easy it is to adopt that knowledge in the React app.

This is our app:

![App](./app.png)

It contains one piece of state, current count and two actions, increment and decrement. The typical reducer may look like this:

```js
const initialState = { count: 0 };

export const counterReducer = (state = initialState, action) => {
  switch (action.type) {
    case "increment":
      return {
        ...state,
        count: state.count + 1,
      };
    case "decrement":
      return {
        ...state,
        count: state.count - 1,
      };
    default:
      return state;
  }
};
```

What is wrong with this approach, and how can we improve it?

---

## Good Practices

First of all, our action types (increment/decrement) are hard-coded strings. Having those is genuinely a bad idea because it can easily lead to all kinds of bugs and typos, it makes refactoring a lot harder, etc.

Second, our default case returns the same state. Why is this bad? If our reducer gets called with an unknown action, it means that something is wrong and we should be notified about that.

The solution to these issues could look like this:

```js
/*
 Instead of having action types as hardcoded strings,
 we can group them in one object,
 this way we can easily avoid bugs caused by typos or naming collisions.
 
 We also made future refactoring a lot easier,
 because all action types are grouped in single place,
 so we can have much better time tracking them down.
*/
export const actionTypes = {
  increment: "increment",
  decrement: "decrement",
};

const initialState = { count: 0 };

export const counterReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.increment:
      return {
        ...state,
        count: state.count + 1,
      };
    case actionTypes.decrement:
      return {
        ...state,
        count: state.count - 1,
      };
    default:
      // Instead of returning same state, our default case now throws error
      // notifying us that we tried to use unknown action type
      // Note for Redux users: Note about Redux: you shouldn't do this if you're using Redux. In Redux it's usually practice to combine all reducers in one with something like `combineReducers`, so every reducer is invoked every time action occurs, so if one of them throws error, everything falls apart. Instead just do a regular "return state".
      throw new Error(`Unknown action type: ${action.type}`);
  }
};
```

---

## Reducer Without Switch/Case

Another very useful improvement to our reducer can be made by getting rid of the switch/case statement. That way we can have more readable, testable, and elegant code.

Here’s the example:

```js
export const actionTypes = {
  increment: "increment",
  decrement: "decrement",
};

/*
  Create handlers object with key/value pairs,
  where every key/value pair represents one case from previous switch statement.
  
  Key is actionType that will allow us to retrieve it's value, handler.
  
  Handler is a function that has same signature as reducer,
  it takes state and action as parameters, and returns new state.
*/
const handlers = {
  [actionTypes.increment]: (state) => ({
    ...state,
    count: state.count + 1,
  }),
  [actionTypes.decrement]: (state) => ({
    ...state,
    count: state.count - 1,
  }),
};

const initialState = { count: 0 };

export const counterReducer = (state = initialState, action) => {
  // Now we can take handler that we need by action.type
  const handler = handlers[action.type];
  // If we don't find handler we will throw error.
  // This way we cover our default case from previous switch statement.
  if (!handler) {
    throw new Error(`Unknown action type: ${action.type}`);
  }
  // At last, we call handler with state and action, and it should return a new state
  const nextState = handler(state, action);
  return nextState;
};
```

Now, instead of manually creating our reducers every time, we can make `createReducer` helper function to handle that for us. It should take `handlers` object, and `initialState` as arguments, and produce reducer as the return value.

Luckily, we already did all heavy lifting in the previous example, so our code should now look like this:

```js
const createReducer =
  (handlers, initialState = {}) =>
  (state = initialState, action) => {
    const handler = handlers[action.type];
    if (!handler) {
      throw new Error(`Unknown action type: ${action.type}`);
    }
    const nextState = handler(state, action);
    return nextState;
  };

export const actionTypes = {
  increment: "increment",
  decrement: "decrement",
};

const initialState = { count: 0 };

export const counterReducer = createReducer(
  {
    [actionTypes.increment]: (state) => ({
      ...state,
      count: state.count + 1,
    }),
    [actionTypes.decrement]: (state) => ({
      ...state,
      count: state.count - 1,
    }),
  },
  initialState,
);
```

---

## Automatically Merge State

So createReducer is now responsible for our reducer creation, and in that process, we can do even more. One particularly nice feature would be the merging of the current and next state. That way we don’t have to manually merge states in all of our handler functions. Instead, we can only return the state changes that we want to apply.

Merging states is not particularly important for our Counter app since it only has one piece of state. But in a real-world scenario, there is almost always a need for merging a current state to the next one. If we don’t, we might lose parts of our state, and so change the structure of it, which can lead to unexpected behaviors and bugs.

Instead of doing merge manually in every handler function, we can spread current and next state into a new object inside of createReducer function. Here’s what our code should look like with that adjustment:

```js
const createReducer =
  (handlers, initialState = {}) =>
  (state = initialState, action) => {
    const handler = handlers[action.type];
    if (!handler) {
      throw new Error(`Unknown action type: ${action.type}`);
    }
    const nextState = handler(state, action);
    return { ...state, ...nextState };
  };

export const actionTypes = {
  increment: "increment",
  decrement: "decrement",
};

const initialState = { count: 0 };

export const counterReducer = createReducer(
  {
    // Now we don't need to manually spread current state,
    // we only need to return minimal changes required to preform our action
    [actionTypes.increment]: (state) => ({
      count: state.count + 1,
    }),
    [actionTypes.decrement]: (state) => ({
      count: state.count - 1,
    }),
  },
  initialState,
);
```

---

## How To Apply in a React Application

Here’s a working example of a React app that utilizes these techniques to make a nice, clean reducer and apply it using `useReducer` hook:

```jsx
const actionTypes = {
  increment: "increment",
  decrement: "decrement",
};

const counterReducer = createReducer({
  [actionTypes.increment]: (state) => ({
    count: state.count + 1,
  }),
  [actionTypes.decrement]: (state) => ({
    count: state.count - 1,
  }),
});

const intialState = { count: 0 };

const App = () => {
  const [state, dispatch] = useReducer(counterReducer, intialState);

  const increment = () =>
    dispatch({
      type: actionTypes.increment,
    });

  const decrement = () =>
    dispatch({
      type: actionTypes.decrement,
    });

  return (
    <div className="app-container">
      <span>Count: {state.count}</span>
      <div className="action-buttons-container">
        <button onClick={decrement}>Decrement</button>
        <button onClick={increment}>Increment</button>
      </div>
    </div>
  );
};
```

[Full codesandbox example](https://codesandbox.io/s/clean-reducers-q94i1)

---

## Conclusion

With simple abstraction like `createReducer` function, we can make our lives much easier and write simple, readable, but yet powerful reducers.
