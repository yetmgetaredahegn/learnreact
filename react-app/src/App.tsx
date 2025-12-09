import { useState } from 'react';
import Game from './components/Game';
;

function App() {
  const [cart, setCart] = useState({
    discount: .1,
    items: [
      { id: 1, title: 'p1', qty: 1 },
      { id: 2, title: 'p2', qty: 2 }
    ]
  });
  const handleClick = () => {
    setCart({ ...cart, items: [...cart.items, ] })
  }

  return (
    // <Game onGame={setGame({
    //   ...game, 
    //   player: {
    //     name: 'Yetu'
    //   }
    // })}></Game>

  );
}

export default App;