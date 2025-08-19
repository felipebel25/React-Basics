import { useEffect, useState } from "react";
/*
 *
 * useEffect is the second most used hook, it works for runs side Effects (fetch API, localStorage, DOM manipulation), it also worked for control the lifecycle of the component
 *
 */
export const HookUseEffect = () => {
  const [counter, setCounter] = useState(0);
  const [pokemons, setPokemons] = useState([]);
  const handleCounter = () => setCounter(counter + 1);

  // if we use the component like this it will trigger the function every render
  // the cases for useEffects may be:  Fetch API, LocalStorage
  //
  useEffect(() => {
    console.log("useEffect without second params");
  });
  // 👉 “Run this effect only once, after the component is first mounted (i.e., after the initial render). equivalent to use componentDidMount in class functions”
  useEffect(() => {
    console.log("Mounting!");
    // 👉 “Run this effect only once, after the component is unmounting
    // clean up function
    return () => {
      console.log("Unmounting!");
    };
  }, []);
  // fetching Data using axios
  //   useEffect(() => {
  //     const fetchPokeData = async () => {
  //       const { data } = await axios(
  //         "https://pokeapi.co/api/v2/pokemon?limit=10&offset=0"
  //       );
  //       setPokemons(data.results.map((pokemon) => pokemon.name));
  //     };
  //     fetchPokeData();
  //   }, []);

  // using fetch native API
  useEffect(() => {
    const fetchPokeData = async () => {
      const data = await fetch(
        "https://pokeapi.co/api/v2/pokemon?limit=10&offset=0"
      );
      const response = await data.json();

      setPokemons(response.results.map((pokemon) => pokemon.name));
    };

    fetchPokeData();

    return () => setPokemons([]);
  }, []);

  return (
    <div>
      {pokemons.map((pokemon) => (
        <p key={pokemon}>{pokemon}</p>
      ))}
    </div>
  );
};
