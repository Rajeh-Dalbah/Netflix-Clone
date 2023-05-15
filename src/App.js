import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './components/Home/Home';
import Movelist from './components/MovieList/MovieList';
function App() {
  return (
    <div>
      <Routes>
          <Route path='/trending' exact  element={<Home/>} />
          <Route path='/' exact element={<Movelist/>} />
      </Routes>
    </div>
  );
}

export default App;