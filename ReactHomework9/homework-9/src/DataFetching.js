import React, {useState, useEffect} from "react";
import axios from 'axios'

function DataFetching() {

    const [films, setFilms] = useState([])

    useEffect (() => {
        axios.get('https://ghibliapi.herokuapp.com/films') 
        .then(res => {
            // console.log(res)
            setFilms(res.data)
        })
        .catch(err => {
            console.log(err)
        })
    }, [])
    return (
        <div>
<ol>
    {
        films.map(film => <li key={film.id}>{film.director}, "{film.title}", ReleaseDate: {film.release_date} 
                       <ul>
                       <li> Description: "{film.description}"</li>
                       </ul>
                         
        </li>)

    }
</ol>
        </div>
    )
}

export default DataFetching;