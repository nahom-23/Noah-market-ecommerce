import React, { createContext, useReducer } from "react";
export const Cartcontext = createContext();
const Context = (props) => {
  const reducer = (state, action) => {
    switch (action.type) {
      case "ADD":
        const template = state.filter((item) => action.playload.id === item.id);
        if (template.length > 0) {
          return state;
        } else {
          return [...state, action.playload];
        }
      // case "INCREASE":

      default:
        return state;
    }
  };
  const [state, dispatch] = useReducer(reducer, []);
  const info = { state, dispatch };
  return (
    <Cartcontext.Provider value={info}>{props.children}</Cartcontext.Provider>
  );
};

export default Context;
