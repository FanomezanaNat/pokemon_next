import React from "react";
import Link from "next/link";
import FetchDetails from "@/components/function/FetchDetails";

export default async function page() {
  const details = await FetchDetails();

  return (
    <div className="container mx-auto flex flex-col">
      <h1 className="text-3xl font- my-4  text-center">Pokemon List</h1>
      <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {details.map((pokemon, index) => (
          <li
            key={index}
            className="bg-slate-800 shadow-md rounded-lg overflow-hidden flex flex-col item"
          ><div>
            <img
              src={pokemon.sprites.front_default}
              alt={`Pokemon ${index + 1}`}
              className="w-48 items-center"
            />
          </div>
            <div className="p-4 flex flex-col items-center">
              <p className="text-xl font-semibold mb-2 text-center">
                {pokemon.name}
              </p>
              <Link href={`/server/${index + 1}`}>
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
