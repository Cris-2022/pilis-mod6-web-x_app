import { Routes, Route } from 'react-router-dom';
import { Home, Products } from './pages';
import Layouts from './layouts';

function App() {
  return (
    <Routes>
      <Route path='/' Component={Home}>
        <Route index Component={Layouts} />
        <Route path='/products' Component={Products} />
      </Route>
    </Routes>
  );
}

export default App;
