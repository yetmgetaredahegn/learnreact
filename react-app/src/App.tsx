import { useState } from 'react';
import produce from 'immer';

function App() {
  const [bugs,setBugs] = useState([
    {id:1,name:'bug1', fixed:false},
    {id:2,name:'bug2',fixed:false}]);

  const handleClick = () => {
    setBugs(bugs.map(bug=>bug.id===1 ? {...bug,fixed:true}:bug));
  };

  return (
    <div>
      <button onClick={handleClick}>Click</button>
    </div>
  );
}

export default App;