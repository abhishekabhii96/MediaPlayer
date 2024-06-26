
import { Route, Routes } from 'react-router-dom'
import './App.css'
import Landingpage from './pages/Landingpage'
import Home from './pages/Home'
import Watchhistory from './pages/Watchhistory'
import Header from './Components/Header'
import Footer from './Components/Footer'

function App() {


  return (
    <>
     <Header/>
    {/* SLASH represents baseURL */}
    <Routes> 
      <Route path='/' element={<Landingpage/>}/>
      <Route path='/home' element={<Home/>} />
      <Route path='/watch-history' element={<Watchhistory/>} />
    </Routes> 
    <Footer/>
    </>
  )
}

export default App
