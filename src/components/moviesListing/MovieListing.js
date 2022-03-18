import React from "react";
import { useSelector } from "react-redux";
import { getAllMovies, getAllSeries } from "../../features/movies/MovieSlice";
import MovieCard from './../movieCard/MovieCard'
import './MovieListing.css'
import Slider from 'react-slick'
import { Settings } from "../../common/settings";

const MovieListing = () => {
  const movies = useSelector(getAllMovies);
  const series = useSelector(getAllSeries);
  console.log("Series :", series)

  let renderMovies, renderSeries = "";
  
  renderMovies =
    movies.Response === "True" ? (
      movies.Search.map((movie, index) => (
        <MovieCard key={index} data={movie} />
    ))
    ) : (
      <div className="movie-error">
        <h3>{movies.Error}</h3>
      </div>
    );
  
    renderSeries =
    series.Response === "True" ? (
      series.Search.map((serie, index) => (
        <MovieCard key={index} data={serie} />
    ))
    ) : (
      <div className="movie-error">
        <h3>{series.Error}</h3>
      </div>
    );

  return (
    <div>
      <div className="movies-wrapper">
        <div className="movie-list">
          <h2>Movies</h2>
          <div className="movie-container"><Slider {...Settings}>{renderMovies}</Slider></div>
        </div>
        <div className="movie-list">
          <h2>Shows</h2>
          <div className="movie-container"><Slider {...Settings}>{renderSeries}</Slider></div>
        </div>
      </div>
    </div>
  );
};

export default MovieListing;
