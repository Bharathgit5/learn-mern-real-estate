import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Home from './Components/Home'
import Signin from './Components/Signin'
import Signup from './Components/Signup'
import About from './Components/About'
import Profile from './Components/Profile'

const App = () => {
  return (
    <>
   <BrowserRouter>
   <Routes>
 <Route path="/" element={<Home/>}/>
 <Route path="/signin" element={<Signin/>}/>
 <Route path="/signup" element={<Signup/>}/>
 <Route path="/about" element={<About/>}/>
 <Route path="/profile" element={<Profile/>}/>
   </Routes>
   </BrowserRouter>
   </>
  )
}

export default App
