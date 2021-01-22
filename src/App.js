import React, { useState, useEffect } from 'react';
import './App.css';
import axios from 'axios';
import Character from './components/Character';
import styled from 'styled-components';

const App = () => {
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.

  // Fetch characters from the API in an effect hook. Remember, anytime you have a 
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.

  const [characters, setCharacters] = useState([]);



  useEffect(() => {
    axios.get('https://rickandmortyapi.com/api/character')
      .then(res => {
        console.log(res.data.results)
        setCharacters(res.data.results)
      })
      .catch(err => {
        console.log(err)
      })
  }, [])



  return (
    <div className="App">
      <h1 className="Header">Rick and Morty Characters</h1>
      <MainContainer>
        {
          characters.map(ch => {
            return <Character key={ch.id} info={ch}/>
          })
        }
      </MainContainer>
    </div>
  );
}

const MainContainer = styled.div`
  display: flex;
  justify-content: space-evenly;
  flex-wrap: wrap;
  box-sizing: border-box;
`;

export default App;
