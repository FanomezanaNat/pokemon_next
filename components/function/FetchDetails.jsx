
export default async function FetchDetails() {
  const data = await fetch ('https://pokeapi.co/api/v2/pokemon?limit=50&offset=0')
  const res= await data.json();
  const results= await res.results;

  const fetchedData= await Promise.all(
    results.map(async (item)=>{
      const itemData= await fetch(item.url);
      const itemRes= itemData.json();
      return itemRes;
    })
  )
  
  return fetchedData;
    
}
