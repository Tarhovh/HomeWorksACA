import React, { useState } from 'react'

export const DogSelectDropdown = ({ dogDetector }) => {
  const [currentDog, setCurrentDog] = useState(dogDetector)
  
  const changeDog = (newDog) => {
    setCurrentDog(newDog)

    const Url = `https://dog.ceo/api/breed/${newDog}/image`
    console.log(Url)
  }
  
  return (
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
  )
}

export default DogSelectDropdown;