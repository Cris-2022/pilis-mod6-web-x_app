import { Link, Route, Routes } from 'react-router-dom'
import { Home } from './routes/home/Home'
import { Login } from './routes/login/login'
import './App.css'


function App() {
  return (
    <div className='App'>
      <header>
        <Link to="/">
          <img src="../logo.png" className='logo' />
        </Link>
        <h1>xApp</h1>
        <Link to="/Login" className='login'>
          <img src="../login.png" alt="" />
          <h2 className='text-login'>Iniciar Seción</h2>
        </Link>
      </header>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/Login' element={<Login />} />
      </Routes>

    </div>
  )
}

export default App
