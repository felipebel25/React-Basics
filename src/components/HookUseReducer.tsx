// useReducer is a React Hook used for managing more complex state logic in functional components. It is an alternative to useState.
import { useEffect, useReducer } from "react";
import axios from "axios";

// So we should use useReducer for complex components, for example a state that have 20 properties, it's better for organization
const initialState = {
  pokemons: [],
  shirts: 0,
  trousers: 0,
};

// reducer is just a pure function that that takes the current state and an action and reducer returns a new copy of the state
// it's important always to return a state
const reducer = (state, action) => {
  switch (action.type) {
    case "ADD_SHIRTS":
      return { ...state, shirts: state.shirts + 1 };
    case "ADD_POKEMONS":
      return { ...state, pokemons: action.payload };
    default:
      return state;
  }
};

export const HookUseReducer = () => {
  // it uses as params a reducer function and an initialState
  // it returns a state and the dispatch
  const [state, dispatch] = useReducer(reducer, initialState);

  // dispatch is a function used to send an action
  const addShirts = () => dispatch({ type: "ADD_SHIRTS" });

  useEffect(() => {
    const fetchData = async () => {
      const { data } = await axios(
        "https://pokeapi.co/api/v2/pokemon?limit=10&offset=0"
      );
      // dispatch is a function used to send an action
      return dispatch({
        type: "ADD_POKEMONS",
        payload: data.results.map((pokemon) => pokemon.name),
      });
    };
    fetchData();
  }, []);

  return (
    <div>
      <p>{state.shirts}</p>
      <button onClick={addShirts}>add shirt</button>
      {state.pokemons.map((pokemon) => (
        <p key={pokemon}>{pokemon}</p>
      ))}
    </div>
  );
};
