"use client";

import { manufacturers } from "@/constants";
import SearchbarManufacturer from "./SearchbarManufacturer";
import { useState } from "react";
import Image from "next/image";


 
const SearchButton = ({ otherClasses }:{ otherClasses:string }) => (
  <button type="submit" className={`-ml-3 z-10 ${otherClasses}`}>
      <Image src="/magnifying-glass.svg" alt="magnifying glass" width={40} height={40}  className="object-contain" />
  </button> 
)

//  const SearchButton = ( ) =>(

//  )

const Searchbar = () => {
    const [manufacturer, setManufacturer] = useState('');
    const [model, setModel] = useState('');
    const handleSearch = () => { }
  return (
    <form className='searchbar' onSubmit={handleSearch}>
        <div className='searchbar__item'>
            <SearchbarManufacturer manufacturer = { manufacturer } setManufacturer = {setManufacturer}/>
          <SearchButton otherClasses="sm:hidden"/>
        </div>
        <div className="searchbar__item">
          <Image src="/model-icon.png" alt="model icon" width={25} height={25} className="absolute w-[20px] h-[20px] ml-4"/>
          <input type="text" name="model" value={model} onChange={(e)=> setModel(e.target.value)} placeholder="Search for car model" className="searchbar__input"/>
          <SearchButton otherClasses="sm:hidden"/>
        </div>
        <SearchButton otherClasses="max-sm:hidden"/>
    </form>
  )
}

export default Searchbar
