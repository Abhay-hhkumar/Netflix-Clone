import React from 'react';
import { Link,useNavigate } from 'react-router-dom';
import { UserAuth } from '../context/AuthContext';

const Navbar = () => {
  const {user, logOut} = UserAuth();
  const navigate= useNavigate();

  const handleLogout = async () => {
    // when we get logout the we directly jump on home page with the help of "navigate(/)."
    try{
      await logOut();
      navigate('/');  
    }catch(error){
      console.log(error);
    }
  }

  return (
    <div className="navheader">
         <Link to='/' className="linkHeading">  <h1 className='netflixHeading'>NETFLIX</h1>  </Link>
    
         {/*   if the uuser get logedin then it show 'Account and Logout' otherwise it show " signin and signout" */} 
         {user?.email ? <div>
                         <Link to='/account'>  <button className='Button Account'>Account</button>  </Link>
                         <button className='Button LogOut' onClick={handleLogout}>LogOut</button>   

                        </div> : <div>
                                  <Link to='/login'>  <button className='signButton signin'>Sign in</button>  </Link>
                                  <Link to='/signup'> <button className='signButton signup'>Sign up</button>  </Link>  
                               </div>    
        }   
    </div> )}
export default Navbar;
