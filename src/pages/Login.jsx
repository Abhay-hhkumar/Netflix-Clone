import React,{useState} from 'react'
import { Link,useNavigate } from 'react-router-dom';
import {UserAuth,} from '../context/AuthContext'

const Login = () => {
 
  const [email,setEmail]=useState('');
  const [password,setPassword]=useState('');
  const [error, setError]=useState('')
  const {user,logIn}= UserAuth();
  const navigate = useNavigate();


const handleSubmit = async (e) =>{
  e.preventDefault();
  setError('');
  try{ await logIn(email,password);

    // we will navigate(jump) to home page when we click on signup
       navigate('/');
       }catch(error){
        console.log(error);
        setError(error.message);
      }}

  return (
    <>
      <div className='SigninComponent'>
      <img src="https://assets.nflxext.com/ffe/siteui/vlv3/b85863b0-0609-4dba-8fe8-d0370b25b9ee/fdf508c8-97d0-42fd-a6f9-9bef6bf96934/IN-en-20230731-popsignuptwoweeks-perspective_alpha_website_large.jpg" alt='/' />
      <div className='blackScreen'></div>
      <div className='signinContentbox'>
         <div className='signinContent'>
          <h1 className='SigninHeading'>Sign In</h1>{error ? <p className="errorSignin">{error}</p> : null}
          <form onSubmit={handleSubmit} className="form" >
              <input className='input' type='email' placeholder='Email' autoComplete="email" onChange={(e)=>setEmail(e.target.value)}/>
              <input className='input' type='password' placeholder='Password' autoComplete="current-password" onChange={(e)=> setPassword(e.target.value)} />
              <button className="signinbutton">Sign In</button>
              <div className="formalities">
                <p><input type="checkbox" className="checkbox" /> Remember me</p>
                <p>Need help?</p>
              </div>
              <p className='lastLine'><span>New to Netflix? </span>{" "}
              <Link to='/signup' className="link">Sign Up</Link></p>
         </form>

         </div>
         </div>
     </div>
    </>
  )
}

export default Login;
