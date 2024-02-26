import React, { useState } from 'react'
import { FaSearch } from "react-icons/fa";
import "../../style/Navbar.css"
export default function Search() {

    const [hoverd, sethoverd] = useState(false);
  return (
    <div className=' search__container w ' >
        <button className='search__btn' onClick={ () => sethoverd(!hoverd)} > <FaSearch/> Search... </button>
        <div className='search__neon' >
         
          {
            hoverd && <div className='input__div' >
            <div className='search__div' > <FaSearch/> <input className='search__input' type='text' /></div>
            </div>
          }
         
        </div>
    </div>
  )
}
