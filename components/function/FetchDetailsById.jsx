export default async function FetchDetailsById(id) {
  const data = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
  const res = await data.json();

  return res;
}
