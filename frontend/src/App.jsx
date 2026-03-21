import api from './api/axiosConfig.js';
import './App.css';
import {useState, useEffect} from 'react';
import { Route,Routes } from 'react-router-dom';

import Layout from './components/Layout.jsx';
import Home from './components/home/Home.jsx';
import Header from './components/header/Header.jsx';
import Trailer from './components/trailer/Trailer.jsx';
import Reviews from './components/reviews/Reviews.jsx';
import NotFound from './components/notFound/NotFound.jsx';

function App() {

  const [movies, setMovies] = useState();
  const [movie, setMovie] = useState();
  const [reviews, setReviews] = useState();

  const getMovies = async () => {
    try{
      const response = await api.get("/v1/movies");
      console.log(response.data);
      setMovies(response.data);
    }
    catch(e){
      console.log(e);
    }
  }

  const getMovieData = async (movieId) => {
    try{
      const response = await api.get(`/v1/movies/${movieId}`);
      const singleMovie = response.data;
      setMovie(response.data);
      setReviews(singleMovie.reviewIds);
    }catch(error){

    }
  }

  useEffect(() => {
    getMovies();
  },[])

  return (
    <div className="App">
      <Header/>
      <Routes>
        <Route path="/" element={<Layout/>}>
          <Route path="/" element={<Home movies={movies}/>}></Route>
          <Route path="/Trailer/:ytTrailerId" element={<Trailer/>} ></Route>
          <Route path="/Reviews/:movieId" element={<Reviews getMovieData={getMovieData} movie={movie} reviews={reviews} setReviews={setReviews}/>}></Route>
          <Route path="*" element ={<NotFound/>}></Route>
        </Route>
      </Routes>
    </div>
  );
}

export default App;
