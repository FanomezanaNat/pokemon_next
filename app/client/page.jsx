"use client";
import Link from "next/link";
import usePokemonData from "@/components/hooks/UsePokemonData";

export default function page() {
  const { pokemonDetails,pokemonList } = usePokemonData();
  return (
    <div className="container mx-auto">
      <h1 className="text-3xl font-bold mb-8">Pokemon List</h1>
      <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {pokemonDetails.map((pokemon, id) => (
          <li key={id} className="bg-grey shadow-md rounded-lg overflow-hidden">
            <img
              src={`${pokemon}`}
              alt={`pokemon ${id + 1}`}
              className="w-full"
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
