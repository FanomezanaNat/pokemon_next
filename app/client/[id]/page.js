"use client";
import userPokemonDetailsById from "@/components/hooks/UsePokemonDetailsById";
export default function page({ params: { id } }) {
  const { pokemon } = userPokemonDetailsById(id);

  return (
    <div className="container mx-auto">
      <h1 className="text-3xl font-bold mb-8 text-center">Pokemon Details</h1>
        {pokemon && (
          <div className="">
            <div className="flex flex-col items-center">
              <img
                src={`${pokemon.sprites.other.dream_world.front_default}`}
                alt={`pokemon ${id + 1}`}
                className="w-40"
              />
            </div>

            <div className="p-4 flex flex-col items-center">
              <p className="text-xl font-semibold mb-2 text-center">
                Name: {pokemon.name}
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
          </div>
        )}

    </div>
  );
}

