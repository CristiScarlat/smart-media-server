import React, { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFolder, faFile } from '@fortawesome/free-solid-svg-icons'

function MoviesPage() {

    const [moviesContent, setMoviesContent] = useState([])
    useEffect(() => {
        fetch('http://192.168.0.171:5000/movies')
            .then(res => res.json())
            .then(data => setMoviesContent(data?.data))
    },[]);

    return (
        <div className="general-container">
            <h1>Movies</h1>
            <h4>No. of items: {moviesContent.length}</h4>
            <div className="movies-list-container">
                {moviesContent.map((movie, index) => (
                    <div key={movie.file + index} style={{ display: 'flex', justifyContent: 'start', alignItems: 'center', margin: '0.2rem' }}>
                        {movie.isDirectory ? <FontAwesomeIcon icon={faFolder} size='lg' color='grey' /> : <FontAwesomeIcon icon={faFile} size='lg' color='grey' />}
                        <h5 style={{ marginLeft: '0.5rem' }}>{movie.file}</h5>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default MoviesPage;