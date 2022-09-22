import { useState, useRef } from 'react';
import "../styles/main.css"
import NavigateBeforeIcon from '@mui/icons-material/NavigateBefore';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';


export function Slider() {

  const carousel = useRef(null)

const handleLeftArrow = (e) => {
 e.preventDefault();
 carousel.current.scrollLeft -= carousel.current.offsetLeft; 
}

const handleRightArrow = (e) => {
  e.preventDefault();
  carousel.current.scrollLeft += carousel.current.offsetLeft; 
 }

  
  return (
    <div className="flex gap-5 mt-16 mb-7 px-20">


      <button><NavigateBeforeIcon className="transition ease-in-out scale-[3] hover:scale-[3.5] overflow-visible" onClick={handleLeftArrow}/></button>
      <div className="carousel flex gap-5 overflow-x-auto scrollbar-hide" ref={carousel}>
      <img className="rounded-2xl transition duration-300 ease-in-out scale-90 hover:scale-100 cursor-pointer" src="https://static-cdn.jtvnw.net/ttv-boxart/21779-188x250.jpg"></img>
     
      <img className="rounded-2xl transition duration-300 ease-in-out scale-90 hover:scale-100 cursor-pointer"src="https://static-cdn.jtvnw.net/ttv-boxart/32399_IGDB-188x250.jpg"></img>
     
      <img className="rounded-2xl transition duration-300 ease-in-out scale-90 hover:scale-100 cursor-pointer" src="https://static-cdn.jtvnw.net/ttv-boxart/516575-188x250.jpg"></img>
     
      <img className="rounded-2xl transition duration-300 ease-in-out scale-90 hover:scale-100 cursor-pointer" src="https://static-cdn.jtvnw.net/ttv-boxart/33214-188x250.jpg"></img>
     
      <img className="rounded-2xl transition duration-300 ease-in-out scale-90 hover:scale-100 cursor-pointer" src="https://static-cdn.jtvnw.net/ttv-boxart/27471_IGDB-188x250.jpg"></img>
     
      <img className="rounded-2xl transition duration-300 ease-in-out scale-90 hover:scale-100 cursor-pointer" src="https://static-cdn.jtvnw.net/ttv-boxart/29595-188x250.jpg"></img>
     
      <img className="rounded-2xl transition duration-300 ease-in-out scale-90 hover:scale-100 cursor-pointer" src="https://static-cdn.jtvnw.net/ttv-boxart/18122-188x250.jpg"></img>
     
      <img className="rounded-2xl transition duration-300 ease-in-out scale-90 hover:scale-100 cursor-pointer" src="https://static-cdn.jtvnw.net/ttv-boxart/31376_IGDB-188x250.jpg"></img>

      <img className="rounded-2xl transition duration-300 ease-in-out scale-90 hover:scale-100 cursor-pointer" src="https://static-cdn.jtvnw.net/ttv-boxart/31376_IGDB-188x250.jpg"></img>

      <img className="rounded-2xl transition duration-300 ease-in-out scale-90 hover:scale-100 cursor-pointer" src="https://static-cdn.jtvnw.net/ttv-boxart/31376_IGDB-188x250.jpg"></img>

      <img className="rounded-2xl transition duration-300 ease-in-out scale-90 hover:scale-100 cursor-pointer" src="https://static-cdn.jtvnw.net/ttv-boxart/31376_IGDB-188x250.jpg"></img>

      <img className="rounded-2xl transition duration-300 ease-in-out scale-90 hover:scale-100 cursor-pointer" src="https://static-cdn.jtvnw.net/ttv-boxart/31376_IGDB-188x250.jpg"></img>

      <img className="rounded-2xl transition duration-300 ease-in-out scale-90 hover:scale-100 cursor-pointer" src="https://static-cdn.jtvnw.net/ttv-boxart/31376_IGDB-188x250.jpg"></img>

      <img className="rounded-2xl transition duration-300 ease-in-out scale-90 hover:scale-100 cursor-pointer" src="https://static-cdn.jtvnw.net/ttv-boxart/31376_IGDB-188x250.jpg"></img>
      </div>
      <button><NavigateNextIcon className="transition ease-in-out scale-[3] hover:scale-[3.5]"  onClick={handleRightArrow}/></button>
    </div>
    )
}

