import React, { useState, useEffect } from 'react';
import { MdChevronLeft, MdChevronRight } from 'react-icons/md';
import { UserAuth } from '../context/AuthContext';
import { db } from '../firebase';
import { updateDoc, doc, onSnapshot } from 'firebase/firestore';
import { AiOutlineClose } from 'react-icons/ai';

const SavedShows = () => {
  const [movies, setMovies] = useState([]);
  const { user } = UserAuth();

  const slideLeft = () => {
    var slider = document.getElementById('slider');
    slider.scrollLeft = slider.scrollLeft - 500;
  };
  const slideRight = () => {
    var slider = document.getElementById('slider');
    slider.scrollLeft = slider.scrollLeft + 500;
  };

  useEffect(() => {
    onSnapshot(doc(db, 'users', `${user?.email}`), (doc) => {
      setMovies(doc.data()?.savedShows);
    });
  }, [user?.email]);

  // to delete the saved sgow

  const movieRef = doc(db, 'users', `${user?.email}`)
  const deleteShow = async (passedID) => {
      try {
        const result = movies.filter((item) => item.id !== passedID)
        await updateDoc(movieRef, {
            savedShows: result
        })
      } catch (error) {
          console.log(error)
      }
  }

  return (
    <>
    <h2 className='SaverowWise'>My Shows</h2>
    <div className='SavedPageRowBox'>
    <MdChevronLeft  onClick={slideLeft} className='MdChevronLeft' size={40}/>

        <div id={'slider' } className='slider'>

        {movies.map((item) => (

          <div key={item.id} className='sliderContent'>
            <img src={`https://image.tmdb.org/t/p/w500/${item?.img}`} alt={item?.title} />
            <div className='hoverImage'>

            {/* for title of image in rows*/}
            <p className='title'>{item?.title}</p>
            <p onClick={()=>deleteShow(item.id)} className =" cross"><AiOutlineClose /></p>

            </div>
            </div>
                  
        ))}
        </div><MdChevronRight onClick={slideRight} className='MdChevronRight' size={40}/>
    </div>
      
    </>
  )
}

export default SavedShows;
