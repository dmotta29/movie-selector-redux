import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { fetchAsyncMovies, fetchAsyncSeries, getAllMovies } from "../../features/movies/MovieSlice";
import user from "./../../images/user.png";
import "./Header.css";

const Header = () => {

  const [term, setTerm] = useState('')
  const dispatch = useDispatch()

  const submitHandler = (e) => {
    e.preventDefault()
    dispatch(fetchAsyncMovies(term))
    dispatch(fetchAsyncSeries(term))
    setTerm('')
  }

  return (
    <div className="header">
      <div className="logo">
        <Link to="/">Movie App</Link>
      </div>
      <div className="search-bar">
        <form onSubmit={submitHandler}>
          <input type='text' value={term} onChange={(e)=> setTerm(e.target.value)}/>
          <button type='submit'>Search</button>
        </form>
      </div>
      <div className="user-image">
        <img src={user} alt="user" />
      </div>
    </div>
  );
};

export default Header;
