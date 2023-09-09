import { Routes, Route } from 'react-router-dom';
import { Home, Products } from './pages';
import Layouts from './layouts';
import { Login } from './pages/Login';

function App() {
  return (
    <Routes>
      <Route path='/' Component={Layouts}>
        <Route index Component={Home} />
        <Route path='products' Component={Products} />
        <Route path='Login' Component={Login} />
      </Route>
    </Routes>
  );
}

export default App;
