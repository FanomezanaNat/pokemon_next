"use client";
import Link from "next/link";
import UsePokemonDetails from "@/components/hooks/UsePokemonDetails";

export default function page() {
  const { pokemonDetailsUrl, pokemonList } = UsePokemonDetails();
  return (
    <div className="container mx-auto">
      <h1 className="text-3xl font-bold my-4  text-center">Pokemon List</h1>
      <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {pokemonDetailsUrl.map((pokemon, id) => (
          <li key={id} className="bg-slate-800 shadow-md rounded-lg overflow-hidden flex flex-col items-center">
            <img
              src={`${pokemon.sprites.front_default}`}
              alt={`pokemon ${id + 1}`}
              className="w-48"
            />
            <div className="p-4 flex flex-col items-center">
              <p className="text-xl font-semibold mb-2 text-center">
                {pokemonList[id].name}
              </p>
              <Link href={`/client/${id + 1}`}>
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
