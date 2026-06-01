// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from './assets/vite.svg'
// import heroImg from './assets/hero.png'
// import './App.css'
// import Fun from "./Fun"
// import Hello01 from "./Hello01"
// import Counter from "./Counter"
// import Bye from "./Bye"
import {BrowserRouter,Routes,Route,Link,useParams} from "react-router-dom"
import Home from "./Home"
import About from "./About"
import Contact from "./Contact"

function App() {
     function User(){
      console.log(useParams())
      const {id}=useParams()
      return <h2>User profile for Id:{id}</h2>
     }
  return (
  <>
    <h1>React Router Example</h1>
      <BrowserRouter>
        <nav>
          <Link to="/">Home</Link><br/>
          <Link to="/About">About</Link><br/>
          <Link to="/Contact">Contact us</Link><br/>
          <Link to="/User/75">User</Link>
          {/* <Link to="Product">Product</Link> */}
        </nav>

       <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/About" element={<About/>}/>
          <Route path="/Contact" element={<Contact/>}/>
          <Route path="/User/:id" element={<User/>}/>
      </Routes>
      </BrowserRouter>
  </>
  );
}
export default App;
