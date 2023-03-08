import AllMovies from './Component/AllMovies';
import AddMovie from './Component/AddMovie';
import EditMovie from './Component/EditMovie';
import NavBar from './Component/NavBar';
import NotFound from './Component/NotFound'; 
import MovieWorld from './Component/MovieWorld';
// import SearchMovies from './Component/SearchMovie';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/" element={<MovieWorld /> } />
        <Route path="all" element={<AllMovies /> } />
        <Route path="/add" element={<AddMovie />} />
        <Route path="/edit/:id" element={<EditMovie />} />
        {/* <Route path="/search" element={<SearchMovies />} /> */}

        <Route path='/*' element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
