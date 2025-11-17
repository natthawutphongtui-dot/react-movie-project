import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './App.css'
import { Provider } from 'react-redux'
import Store from './store/Store'


//component
import Header from './component/header/Header'
import Home from './component/Home/Home'
import MovieDetail from './component/MovieDetail/MovieDetail'
import Footer from './component/Footer/Footer'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <Provider store={Store}>
      <Router>
        <Header />
        <div className='container'>
          <Routes>
            <Route path='/' element = {<Home />} />
            <Route path='/movie/:id' element = {<MovieDetail />} />
          </Routes>
        </div>
        <Footer />
      </Router>
      </Provider>
    </div>
  )
}

export default App
