import React from 'react'
import { Link } from 'react-router-dom'

export default function MovieItem({ item }) {
    return (
        <div className='col-lg-4 col-md-6 mb-4'>
            <img src={item.Poster} alt={item.Title} />
            <h4>{item.Title}</h4>
            <div>-Year: {item.Year}</div>
            <Link to={`/movies/${item.imdbID}`}>More info</Link>
        </div>
    )
}
