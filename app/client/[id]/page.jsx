"use client";
import UsePokemonDetails from "@/components/hooks/UsePokemonDetails";

export default function page() {
  const { pokemonDetailsUrl, pokemonList } = UsePokemonDetails();

  return (
    <div className="container mx-auto">
      <h1 className="text-3xl font-bold mb-8">Pokemon List</h1>
      <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {pokemonDetailsUrl.map((pokemon, id) => (
          <li key={id} className="bg-grey shadow-md rounded-lg overflow-hidden">
            <img
              src={`${pokemon.sprites.front_default}`}
              alt={`pokemon ${id + 1}`}
              className="w-full"
            />
            <div className="p-4 flex flex-col items-center">
              <p className="text-xl font-semibold mb-2 text-center">
                Name: {pokemonList[id].name}
              </p>
              <p className="text-xl font-semibold mb-2 text-center">
                Height: {pokemon.height}
              </p>
              <p className="text-xl font-semibold mb-2 text-center">
                Weight: {pokemon.weight}
              </p>
              <p className="text-xl font-semibold mb-2 text-center">
                Type: {pokemon.types.map((type) => type.type.name)}
              </p>
              <p className="text-xl font-semibold mb-2 text-center">
                Type: {pokemon.order}
              </p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
