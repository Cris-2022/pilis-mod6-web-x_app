import { Routes, Route } from 'react-router-dom';
import { Home } from './pages';
import Layouts from './layouts';

function App() {
  return (
    <Routes>
      <Route path='/' Component={Home}>
        <Route index Component={Layouts} />
      </Route>
    </Routes>
  );
}

export default App;
