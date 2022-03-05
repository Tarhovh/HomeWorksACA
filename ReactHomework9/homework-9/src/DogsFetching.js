import React, {useState, useEffect} from "react";
import axios from 'axios'
import DogSelectDropdown from "./Select";

function DogsFetching() {

    console.log(DogSelectDropdown.newDog)

    const [messages, setDogs] = useState([])

    useEffect (() => {
        axios.get(`https://dog.ceo/api/breed/${DogSelectDropdown.newDog}/images`) 
        .then(res => {
            console.log(res)
            setDogs(res.data.message)
        })
        .catch(err => {
            console.log(err)
        })
    }, [])
    return (
        <div>

<DogSelectDropdown/>

{
     messages.map(message => <img src = {message} alt="dog"/>)

}

        </div>
    )
}

export default DogsFetching;