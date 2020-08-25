import React from 'react';
import './App.css';
import fakeData from './Components/FakeData';
import { useState } from 'react';
import User from './Components/User/User'

function App() {
  const user = fakeData;

  const [people, setPeople] = useState(user);

  const [newPeople, setNewPeople] = useState([]); 

  const hadelAddPeople = (addUser) =>{
    const addPeople = [...newPeople, addUser]
    setNewPeople(addPeople);
  }


  return (
    <div className="App">
      <h1>Here I wanna add {newPeople.length} People</h1>

      {
        user.map((people, id) =><User people={people} key={id} hadelAddPeople={hadelAddPeople}></User>)
      }
    </div>
  );
}

export default App;
