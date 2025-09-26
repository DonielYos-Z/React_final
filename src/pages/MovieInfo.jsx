import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'

export default function MovieInfo() {
    const [item, setItem] = useState({})
    const [loading, setLoading] = useState(false)
    const params = useParams()
    useEffect(() => {
        const fetchData = () => {
            doApi();
        };
        fetchData();
    }, [params.id]);
    const doApi = async () => {
        try {
            setLoading(true)
            const url = `https://www.omdbapi.com/?i=${params.id}&apikey=5a292f28`
            const resp = await axios.get(url)
            console.log(resp.data)
            setItem(resp.data)
            setLoading(false)
        }
        catch (err) {
            console.log(err)
            setLoading(false)
        }
    }
    return (
        <div className='container text-center col-lg-6'>
            {loading && <h2 className='text-danger'>Loading...</h2>}
            {!loading && item.Title && (
                <>
                    <h2 className='mb-3'>{item.Title}</h2>
                    <img src={item.Poster} alt={item.Title} className='w-50 mb-3' />
                    <p>{item.Plot}</p>
                    <p><strong>Genre:</strong> {item.Genre}</p>
                    <p><strong>Runtime:</strong> {item.Runtime}</p>
                    <p><strong>PG Rating:</strong> {item.Rated}</p>
                    <p><strong>Rate:</strong> {item.imdbRating}</p>
                    <p><strong>Release Date:</strong> {item.Released}</p>
                    <p><strong>Featuring:</strong> {item.Actors}</p>
                    <p><strong>Directed by:</strong> {item.Director}</p>
                    <p><strong>Written by:</strong> {item.Writer}</p>
                    <p><strong>Awards:</strong> {item.Awards}</p>
                </>
            )}
            <Link to="/" className='btn btn-secondary mt-3'>Back to list</Link>
        </div>
    )
}


