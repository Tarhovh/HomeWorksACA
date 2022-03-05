
import './App.css';
import DataFetching from './DataFetching';
import DogSelectDropdown from './SelectDog';
// import DogsFetching from './DogsFetching';
// import { useEffect, useState } from 'react';


function App() {
  
  return (
    <div className="App">
      {/* <DogsFetching
     /> */}

     <DogSelectDropdown/>
     <DataFetching/>

    
     
    </div>
  );
}

export default App;
