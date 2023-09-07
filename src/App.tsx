import { Routes, Route } from 'react-router-dom';
import { Home } from './pages';

function App() {
  return (
    <Routes>
      <Route index Component={Home} />
    </Routes>
  );
}

export default App;
