import './App.css'
import AboutUs from './Pages/AboutUs';

import HomePage from './Pages/HomePage';

import { Routes,Route } from 'react-router-dom'
import NotFound from './Pages/NotFound';

function App() {

  return (
    <>
      <Routes>
          <Route path="/" element={<HomePage/>}></Route>
          <Route path="/about" element={<AboutUs/>}></Route>

          <Route path='*' element={<NotFound></NotFound>}></Route>
      </Routes>
    </>
  )
}

export default App
