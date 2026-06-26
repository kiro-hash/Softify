import { Route,Routes,BrowserRouter } from 'react-router-dom'
import './App.css'
import Home from './pages/Home'
import Services from './pages/Services'

function App() {
  return(
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/services' element={<Services/>}/>
        <Route path='/projects'/>
        <Route path='/contact'/>
        <Route path='/metrics'/>
        <Route path='/testmonials'/>
        <Route path='/joinus'/>
      </Routes>
    </BrowserRouter>
  )
}

export default App
