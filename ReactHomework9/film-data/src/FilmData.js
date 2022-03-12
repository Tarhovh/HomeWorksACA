import React, { useState, useEffect } from "react";
import "./App.css";

function FilmData() {

    const [film, setFilm] = useState("")

    useEffect (() => {
        fetch('https://ghibliapi.herokuapp.com/films/2baf70d1-42bb-4437-b551-e5fed5a87abe') 
        .then( async (res) => {
            const json = await res.json()
            console.log(json)
            setFilm(json)
        })
        .catch(err => {
            console.log(err)
        })
    }, [])
    return (
        <div>
<ol>
    {
       <li>{film.title}</li>
    }
</ol>
        </div>
    )
}

export default FilmData;

