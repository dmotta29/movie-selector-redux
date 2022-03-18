import { configureStore } from "@reduxjs/toolkit";
import movieReducer from './movies/MovieSlice'

export const store = configureStore({
    reducer: {
        movies: movieReducer
    } 
})