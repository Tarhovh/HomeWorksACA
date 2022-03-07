
import './App.css';
// import DataFetching from './DataFetching';
// import DogSelectDropdown from './SelectDog';

import {useEffect, useRef, useState,} from 'react'
// import DogsFetching from './DogsFetching';
// import { useEffect, useState } from 'react';


function App() {

  const [data, setData] = useState(false)

  useEffect(() => {
    fetch("https://restcountries.com/v3.1/name/aruba?fullText=true")
    .then(res => res.json())
    .then(data => setData(data))
  }, [])

  
  return (

    <div>
        <h1>Hello</h1>
        {
          data && 
          <div>{JSON.stringify(data)}</div>
        }
    </div>
  );
}

export default App;
