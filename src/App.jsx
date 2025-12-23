import { useState } from 'react';
import Headers from './components/Header.jsx';
import UserInput from './components/UserInput.jsx';
import Results from './components/Results.jsx'; 

function App() {
   const [userInput, setUserInput] =useState({
        initialInvestment: 1000,
        annualInvestment: 1200,
        expectedReturn: 6,
        duration: 10,
    });
    
    const inputIsValid = userInput.duration >=1;


    function handleChange(inputIdentifier, newValue) {
    setUserInput(prevUserInput => {
        return {
            ...prevUserInput,
            [inputIdentifier]: +newValue,
        }; 
    });
    }

  return (
    <>
      <Headers />
      <UserInput onChange={handleChange} userInput={userInput}/>
      {!inputIsValid && <p className='center'>please enter valid number</p>}
      {inputIsValid && <Results input={userInput}/>}
    </>
    

  );
}

export default App
