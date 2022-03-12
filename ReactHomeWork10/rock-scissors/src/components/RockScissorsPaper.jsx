import React, {useState, useEffect, useRef, useReducer} from "react";
import Paper from "../paper.png";
import Rock from "../rock.png";
import Scissors from "../scissors.png";

const choices = [
{id: 1, name: 'rock', image: Rock, losesTo: 2, winsTo: 3},
{id: 2, name: 'paper', image: Paper, losesTo: 3, winsTo: 1},
{id: 3, name: 'scissors', image: Scissors, losesTo: 1, winsTo: 2}
];

function RockScissorsPaper() {

const[userChoice, setUserChoice] = useState([]);
const [computerChoice, setComputerChoice] = useState([]);
const[userScore, setUserScore] = useState(0);
const[compScore, setCompScore] = useState(0);
const [gameState, setGameState] = useState('');

useEffect(() => {
     restartGame()
     setComputerChoice([])
    //  setUserChoice([])
  }, []);


function restartGame() {
   
    const computerChoice = choices[Math.floor(Math.random() * choices.length)];

    setComputerChoice(computerChoice);
  }

const handleUserChoice = (value) => {
    const userChoice = choices.find(e => e.id === value);
    setUserChoice(userChoice);
    if (userChoice.losesTo === computerChoice.id) {
        setCompScore(score => score + 1);
        setGameState('lose');
      } else if (userChoice.winsTo === computerChoice.id) {
        setUserScore(point => point + 1);
        setGameState('win');
      } else if (computerChoice.id === userChoice.id) {
        // draw
        setGameState('draw');
      }
  
};

  return (
    <div className="container">

      <div className="scoreZone">
        <div> <h1>Computer Score: {compScore} </h1></div>
        <div><h1>Your Score: {userScore} </h1></div>
        <div><h1>GameState: {gameState}</h1></div>
        <div><h2>Your Choice: {userChoice.name}</h2></div>
        <div><h2>Computer Choice: {computerChoice.name}</h2></div>
      </div>
      
        <div className="gamerZone">
        <p>Your choice</p>

       <img src={Rock} className="gamer-choice" alt="rock" 
                 onClick={() => {
                    restartGame();
                    handleUserChoice(1);
              }} 
          />
          <img src={Paper} className="gamer-choice" alt="paper" 
                 onClick={() => {handleUserChoice(2);
                    restartGame();
                    <h2>{userChoice}</h2>
              }} 
          />
          <img src={Scissors} className="gamer-choice" alt="scissors" 
        onClick={() => {handleUserChoice(3);
              restartGame();
        }
    }
          />
        </div>

        <div className="compZone">
        <img src={computerChoice.image        
        } className="comp-choice" alt={computerChoice.name} />
        </div>
    </div>
  );
}

export default RockScissorsPaper;
