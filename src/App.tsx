import { Routes, Route } from 'react-router-dom';
import { Home, Products, Orders } from './pages';
import Layouts from './layouts';

function App() {
  return (
    <Routes>
      <Route path='/' Component={Layouts}>
        <Route index Component={Home} />
        <Route path='products' Component={Products} />
        <Route path='orders' Component={Orders} />
      </Route>
    </Routes>
  );
}

export default App;
