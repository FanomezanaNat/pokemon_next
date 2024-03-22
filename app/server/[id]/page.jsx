"use client";

import { data } from "autoprefixer";
import { usePathname} from "next/navigation";
import React, { useEffect, useState } from "react";

export default function Page() {

    fetch("https://pokeapi.co/api/v2/pokemon?limit=3&offset=0")
    .then(response=>response.json())
    .then(data=>console.log(data))

    
   
  return null
}
