import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './components/Home/Home';
import  Navbar  from './components/Navbar/Navbar';
import Favorite from './components/FavList/FavList';
function App() {
  return (
    <div>
      <Navbar/>
      <Routes>
          <Route path='/trending' exact  element={<Home/>} />
          <Route path='/getmovies' exact element={<Favorite/>} />
      </Routes>
    </div>
  );
}

export default App;