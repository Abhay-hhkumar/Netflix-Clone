
import React,{useState} from 'react';
import { Link,useNavigate } from 'react-router-dom';
import {UserAuth,} from '../context/AuthContext'

const Signup = () => {
  const [email,setEmail]=useState('');
  const [password,setPassword]=useState('');
  const {user,signUp}= UserAuth();
  const navigate = useNavigate();


const handleSubmit = async (e) =>{
  e.preventDefault();
  try{ await signUp(email,password);
    // we will navigate(jump) to home page when we click on signup
       navigate('/');
       }catch(error){
        console.log(error);
      }}

  return (
    <>
      <div className='SignupComponent'>
         <img src="https://assets.nflxext.com/ffe/siteui/vlv3/b85863b0-0609-4dba-8fe8-d0370b25b9ee/fdf508c8-97d0-42fd-a6f9-9bef6bf96934/IN-en-20230731-popsignuptwoweeks-perspective_alpha_website_large.jpg" alt='/' />
         <div className='blackScreen'></div>

         <div className='signupContentbox'>
            <div className='signupContent'>
               <h1 className='SignupHeading'>Sign Up</h1>
               <form onSubmit={handleSubmit} className="form" >
                  <input className='input' onChange={(e)=> setEmail(e.target.value)} type='email' placeholder='Email' autoComplete="email" />
                  <input className='input' onChange={(e)=> setPassword(e.target.value)} type='password' placeholder='Password' autoComplete="current-password" />
                  <button className="signupbutton">Sign Up</button>
                  <div className="formalities">
                    <p><input type="checkbox" className="checkbox" /> Remember me</p>
                    <p>Need help?</p>
                  </div>
                  <p className='lastLine'><span>Already subscribed to Netflix? </span>{" "}
                  <Link to='/login' className="link">Sign In</Link></p>
               </form>
         </div>
         </div>
     </div>
    </>
    
  )
}
export default Signup;
