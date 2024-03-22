
export default async function FetchDetails() {
  const data = await fetch ('https://pokeapi.co/api/v2/pokemon?limit=50&offset=0')
  const res= await data.json();
  return res;
    
}
