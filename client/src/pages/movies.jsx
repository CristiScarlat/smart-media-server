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
                    <div key={movie.file + index} className="d-flex m-2 justify-content-start align-items-center movies-list-item">
                        {movie.isDirectory ? <FontAwesomeIcon icon={faFolder} size='lg' color='grey' /> : <FontAwesomeIcon icon={faFile} size='lg' color='grey' />}
                        <h5 className="ml-2 mb-0">{movie.file}</h5>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default MoviesPage;