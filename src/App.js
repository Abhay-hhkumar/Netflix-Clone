import Navbar from './components/Navbar';
import Home from './pages/Home';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import { AuthContextProvider } from './context/AuthContext';
import Account from './pages/Account';
import Signup from './pages/Signup';
import Login from './pages/Login';
import ProtectedRoute from './components/ProtectedRoute';

function App() {
  return (
    <>
 <AuthContextProvider>

   <Navbar />
   <Routes>
   <Route path='/'         element={<Home />} />
   <Route path='/login'    element={<Login />} />
   <Route path='/signup'   element={<Signup />} />
   <Route path ='/account' element={ <ProtectedRoute> <Account /> </ProtectedRoute>  } />
   </Routes>
 </AuthContextProvider>
    
    </>
  );
}
export default App;
// whenever we create new account then his information will be get save in database width an empty array in which we willl  store our saves movie