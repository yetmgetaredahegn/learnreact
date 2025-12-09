import React from 'react'
interface Props{
    onGame: () => void;
}

const Game = ({onGame}: Props) => {
  return (
    <button onClick={onGame}>Game</button>
  )
}

export default Game