import React from 'react';
import SavedShows from '../components/SavedShows';


const Account = () => {
  return (
    <>
    <div className="savedFile"> 
       <img src="https://assets.nflxext.com/ffe/siteui/vlv3/b85863b0-0609-4dba-8fe8-d0370b25b9ee/fdf508c8-97d0-42fd-a6f9-9bef6bf96934/IN-en-20230731-popsignuptwoweeks-perspective_alpha_website_large.jpg" alt='/' />
       <div className="blackScreen">
        <div className="content">
           <h2 className="saveHeading">My Shows</h2>
        </div>
       </div>
    </div>
    <SavedShows />
      
    </>
  )
}

export default Account
