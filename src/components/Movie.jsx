import React, { useState } from 'react';
import { FaHeart, FaRegHeart } from 'react-icons/fa';
import { UserAuth } from '../context/AuthContext';
import { db } from '../firebase';
import { arrayUnion, doc, updateDoc } from 'firebase/firestore';

const Movie = ({ items }) => {
  const [like, setLike] = useState(false);
  const [saved, setSaved] = useState(false);
  const { user } = UserAuth();

  const movieID = doc(db, 'users', `${user?.email}`);

  const saveShow = async () => {
    if (user?.email) {
      setLike(!like);
      setSaved(true);
      await updateDoc(movieID, {
        savedShows: arrayUnion({
          id: items.id,
          title: items.title,
          img: items.backdrop_path,
        }),
      });
    } else {
      alert('Please log in to save a movie');
    }
  };


  return (
    <div className='sliderContent'>
            <img src={`https://image.tmdb.org/t/p/w500/${items?.backdrop_path}`} alt={items?.title} />
            <div className='hoverImage'>

               {/* for title of image in rows*/}
               <p className='title'> {items?.title} </p>

               {/* for heasrt save icon in rows */}
               <p onClick={saveShow}> {like ? <FaHeart className='heartSave' /> : <FaRegHeart className="heartSave" />}</p>
            </div>
      </div>
  )
}

export default Movie
