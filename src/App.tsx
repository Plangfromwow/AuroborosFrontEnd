import { useEffect, useState } from 'react'
import './App.css'
import { RaceInfo, Race } from './RaceInfo';

function App() {
  
  // const [races, setraces] = useState([]);
  // useEffect(()=>{
  //   fetch('https://localhost:7007/api/races')
  //     .then((response)=>response.json())
  //     .then((data)=>{
  //       console.log(data);
  //       setraces(data);
  //     })
  //     .catch((err)=>{
  //       console.log(err);
  //     })
  // }, []);

const [races, setRaces] = useState([]);
useEffect(()=>{
  fetch('https://localhost:7007/api/races')
    .then((response)=>response.json())
    .then((data)=>{
      console.log(data);
      setRaces(data);
    })
    .catch((err)=>{
      console.log(err);
      
    })
},[]);

  return (
    <div className="App">
      <h4>Race</h4>
      <select>
        <option value="FIRST">Please Pick One</option>
    {races.map((race:RaceInfo)=>{
      return (
        <option key={race.racename}>{race.racename}</option>
      )
    })}
      </select>
    </div>
  )
}

export default App
