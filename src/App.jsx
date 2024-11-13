import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './pages/Home'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Gallery from './pages/Gallery'
import Contact from './pages/Contact'
import About from './pages/About'
function App() {

  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} ></Route>
        <Route path='/gallery' element={<Gallery />} ></Route>
        <Route path='/contact' element={<Contact />} ></Route>
        <Route path='/about' element={<About />} ></Route>
      </Routes>
      <Footer />
    </BrowserRouter>
  )
}

export default App
