import axios from 'axios'
import React, { useEffect, useState } from 'react'
import MovieItem from '../components/MovieItem'

export default function Movies({ query = "" }) {
    const [list, setList] = useState([])
    const [loading, setLoading] = useState(false)
    useEffect(() => {
        if (query.trim() !== "") {
            doApi(query)
        } else {
            doApi("Warhammer")
        }
    }, [query])
    const doApi = async (searchItem) => {
        try {
            setLoading(true)
            const url = `https://www.omdbapi.com/?s=${searchItem}&apikey=5a292f28`
            const resp = await axios.get(url)
            setList(resp.data.Search || [])
            setLoading(false)
        }
        catch (err) {
            console.log(err)
            setLoading(false)
        }
    }
    return (
        <div className='container text-center'>
            <h2 className='mb-4'>Movies list</h2>
            {loading && <h4 className="text-center text-danger">Loading...</h4>}
            <div className='row'>
                {list.map(item => (
                    <MovieItem key={item.imdbID} item={item} />
                ))}
            </div>
            {!loading && list.length === 0 && query && <p className="text-center">No results found.</p>}
        </div>
    )
}
