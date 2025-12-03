import { useState } from 'react';
import Form from './components/Form.tsx';

function App() {
  const [tags,setTags] = useState(['happy','cheerful']);

  const handleClick = () => {
    // add
    setTags([...tags,'excited']);
    // remove
    setTags(tags.filter(tag => tag !== 'happy'));
    // update
    setTags(tags.map(tag => tag === 'cheerful' ? 'joyful' : tag));
    console.log(tags);

    
  };

  return (
    <div>
      <button onClick={handleClick}>Click</button>
    </div>
  );
}

export default App;