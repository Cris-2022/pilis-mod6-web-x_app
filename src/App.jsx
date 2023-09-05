import { Route, Routes } from 'react-router-dom'
import { Navigation } from './routes/navigation/Navigation'
import { Home } from './routes/home/Home'
import { Login } from './routes/login/login'
import Product from './routes/product/Producto'
import  Pedido  from './routes/pedido/Pedido'
import './App.css'



function App() {
  return (
    <div className='App'>
      <Routes>
        <Route path='/' element={<Navigation />}>
          <Route index element={<Home />} />
          <Route path='/Login' element={<Login />} />
        </Route>
      </Routes>
    </div>
  )
}

export default App
