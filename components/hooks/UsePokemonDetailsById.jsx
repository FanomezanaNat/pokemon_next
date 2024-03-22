import { useState,useEffect } from "react";
export default function userPokemonDetailsById(id) {
  const [pokemon, setPokemon] = useState('');

  useEffect(() => {
    async function fetchData() {
      try {
        const data = await fetch(
          `https://pokeapi.co/api/v2/pokemon/${id}`
        );
        const res = await data.json();
        setPokemon(res);
      } catch (error) {
        console.error(`Error fetching data: ${error}`);
      }
    }

    fetchData();
  }, [id]);


  return {pokemon}
}
