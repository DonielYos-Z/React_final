import React, { useState } from 'react'
import Movies from './Movies'

export default function Home() {
    const [query, setQuery] = useState("")
    return (
        <div className='container text-center'>
            <h1>Home Page</h1>
            <input
                type="text"
                placeholder="Search for a movie..."
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                className="form-control my-3"
            />
            <button onClick={() => setQuery(query)} className="btn btn-primary">Search</button>
            <Movies query={query} />
        </div>
    )
}


