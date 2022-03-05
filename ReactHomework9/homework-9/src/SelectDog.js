import React, { useState } from 'react'
import axios from 'axios'

export const DogSelectDropdown = ({ dogDetector }) => {
  const [currentDog, setCurrentDog] = useState(dogDetector)
  const [messages, setDogs] = useState([])
  
  const changeDog = (newDog) => {
    setCurrentDog(newDog)

    axios.get(`https://dog.ceo/api/breed/${newDog}/images`) 
    .then(res => {
        // console.log(res.data.message)
        setDogs(res.data.message)
    })
  }
  
  return (
      <div>
    <form>
      <select 
        onChange={(event) => changeDog(event.target.value)}
        value={currentDog}

        
      >
        <option >--Select a breed--</option>
        <option value="akita">Akita</option>
        <option value="beagle">Beagle</option>
        <option value="dalmatian">Dalmatian </option>
        <option value="germanshepherd">German Shepherd</option>
        <option value="husky">Husky </option>
        <option value="labrador">Labrador </option>
        <option value="pug">Pug  </option>
        <option value="retriever/golden">Golden Retriever </option>
        <option value="spaniel/cocker">Cocker Spaniel</option>
      </select>
    </form>

    {
     messages.map(message => <img src = {message} alt="dog"/>)

}
    </div>

  )
}

export default DogSelectDropdown;