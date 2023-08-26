import { Route, Routes } from 'react-router-dom'
import { Home } from './routes/home/home'
import { Login } from './routes/login/login'
import Product from './routes/product/Producto'
import { Pedido } from './routes/pedido/Pedido'
import './App.css'



function App() {
  return (
    <div className='App'>
      <header>
        <a href="/">
        <img src="../logo.png" className='logo' />
        </a>
        <h1>xApp</h1>
        <a href="/Login">
        <img src="../login.png" alt="" />
        <h2>Iniciar Seción</h2>
        </a>
      </header>
   
      <Routes>
        <Route path='/' element= {<Home/>}/>
        <Route path='/Login' element= {<Login/>}/>
        <Route path='/Producto' element= {<Product/>}/>
        <Route path='/Pedido' element= {<Pedido/>}/>

      </Routes>
      
    </div>
  )
}

export default App
