import React, { useState,useEffect } from 'react';
import {MdChevronLeft, MdChevronRight} from 'react-icons/md'
import axios from 'axios';
import Movie from './Movie';


const Row = ( {title,fetchURL,rowID} ) => {
    const [movies,setMovies]=useState([]);

    useEffect(()=>{
          axios.get(fetchURL).then((response)=>{
          setMovies(response.data.results)
         })
          },[fetchURL])

    const slideLeft = () => {
        var slider = document.getElementById('slider' + rowID);
        slider.scrollLeft = slider.scrollLeft - 500;
      };
      const slideRight = () => {
        var slider = document.getElementById('slider' + rowID );
        slider.scrollLeft = slider.scrollLeft + 500;
      };
   
  return (
    <>
    <h2 className='rowWise'>{title}</h2>
    <div className='rowBox'>
      <MdChevronLeft  onClick={slideLeft} className='MdChevronLeft' size={40} />
        <div id={'slider' + rowID} className='slider'>
            {movies.map((item, id) => (
                <Movie key={id} items={item} />                    
               ))}
        </div>
      <MdChevronRight onClick={slideRight} className='MdChevronRight' size={40}/>
    </div>
      
    </>
  )}
export default Row
