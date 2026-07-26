import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { Provider } from 'react-redux'
import Store from './store/Store'
import './App.css'

//component
import Header from './component/header/Header'
import Home from './component/Home/Home'
import MovieDetail from './component/MovieDetail/MovieDetail'
import Footer from './component/Footer/Footer'

function App() {
  return (
    <Provider store={Store}>
      <Router>
        <Header />
        <div className='container'>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/movie/:id' element={<MovieDetail />} />
          </Routes>
        </div>
        <Footer />
      </Router>
    </Provider>
  )
}

export default App