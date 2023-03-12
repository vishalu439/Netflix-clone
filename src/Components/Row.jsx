import React from "react"
import "./Row.css"
import axios from "../axios"
import { useState,useEffect } from "react"
const base_url = "https://image.tmdb.org/t/p/original/";

function Row({title,fetchUrl,isLargeRow}){
    const[movies,setMovies]=useState([])
    useEffect(()=>{
     const fetchData=async()=>{
      const request=await axios.get(fetchUrl);
       setMovies(request.data.results)
       return request


     }
     fetchData()

    },[])
    return(<div className="row">
    <h2>{title}</h2>
    <div className="row__posters">
     
     {movies.map((movie)=>(
       <img
       key={movie.id}
     className={`row__poster  ${isLargeRow && "row__posterLarge"} `}
     src={`${base_url}${isLargeRow ? movie?.poster_path : movie?.backdrop_path}`}
     alt={movie.name}
     
     />



     ))}
    </div>

    </div>)
}
export default Row