  import React,{useState,useEffect} from 'react';
  import axios from 'axios';
  import requests from '../Requests';
  
  function Main() {
    const [movies,setMovies]=useState([]);
    const movie = movies[Math.floor(Math.random()*movies.length)]

    useEffect(() => {

        axios.get(requests.requestPopular).then((response)=>{
            setMovies(response.data.results)
        })

    },[])
    
    //  show ... if number of characters in overview sentence is very large
    // here, if number of character in overview string is more than 150 then after 150th characters ... will apperar.
    // and if number of characters in overview is less than 150 then whole overview will appear

    const truncateString= (str,num)=>{
        if(str?.length  > num){
            return str.slice(0,num) + "...";
        }else{
            return str;
        }
    }



    return (
      <div className="Main">
         <div className="mainChild">
             <div className="blackGradient"></div> 
             <img src={`https://image.tmdb.org/t/p/original/${movie?.backdrop_path}`} alt={movie?.title}/> 

             

             <div className="contentBox">
                 <h1 className='movieTitle'>{movie?.title}</h1>
                 <div className='buttonBox'>
                     <button className='button buttonPlay'>Play</button>
                     <button className='button buttonWatchLater'>Watch later</button>
                 </div>
                 <p className='releaseDate'>Released :     {movie?.release_date}</p>
                 <p className='overview'> {truncateString(movie?.overview, 100)}</p>
             </div>
             
         </div>
      
        
      </div>
    )
  }
  
  export default Main

//   57224fe93cdf2e50191b9a9c5fc5f868

  