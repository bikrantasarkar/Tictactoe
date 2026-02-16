import React, { useState } from 'react'
import './App.css'
import Square from './Square/Square'

const renderFrom = [
  [1,2,4],
  [4,5,6],
  [7,8,9]
]

const App = () => {
  const [gameState, setGameState] = useState(renderFrom);

  return (
    <div className='main-div'>
        <div className="move-detection">
          <div className="left">Yourself</div>
          <div className="right">Opponent</div>
        </div>
      <div>
        
        <h1 className='game-heading water-background'>Tic Tac Toe</h1>
      <div className='square-wrapper'>
        {
          gameState.map(arr=>
          {
            return arr.map(e=>{
              return <Square/>
            })
          }
          )
        }
      </div>
      </div>
    </div>
  )
}

export default App