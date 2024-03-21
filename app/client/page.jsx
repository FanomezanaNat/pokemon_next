"use client";
import React, { useEffect ,useState} from "react";
import Link from "next/link";

export default function page() {
  const [pokemonList, setPokemonList] = useState([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const data = await fetch(
          "https://pokeapi.co/api/v2/pokemon?limit=50&offset=0"
        );
        const res = await data.json();
        setPokemonList(res.results);
      } catch (error) {
        console.error(`Error fetching data:${error}`);
      }
    }
    fetchData();
  }, []);
  return (
    <div className="container mx-auto">
    <h1 className="text-3xl font-bold mb-8">Pokemon List</h1>
    <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {pokemonList.map((pokemon, index) => (
        <li
          key={index}
          className="bg-grey shadow-md rounded-lg overflow-hidden"
        >
          <img
            src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${
              index + 1
            }.png`}
            alt={`Pokemon ${index + 1}`}
            className="w-full"
          />
          <div className="p-4 flex flex-col items-center">
            <p className="text-xl font-semibold mb-2 text-center">{pokemon.name}</p>
            <Link href={`/server`}>
              <button class="btn overflow-hidden relative w-64 bg-transparent text-white py-4 px-4 rounded-xl font-bold uppercase -- before:block before:absolute before:h-full before:w-1/2 before:rounded-full before:bg-blue-400 before:top-0 before:left-1/4 before:transition-transform before:opacity-0 before:hover:opacity-100 hover:text-white-200 hover:before:animate-ping transition-all duration-300">
                <span class="relative">details</span>
              </button>
            </Link>
          </div>
        </li>
      ))}
    </ul>
  </div>
  );
}
