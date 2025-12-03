import { useState } from 'react';
import Form from './components/Form.tsx';

function App() {
  const [customer,setCustomer] = useState({
    name:'Yetu',
    address: {
      city: 'Addis Ababa',
      zipCode: 1000
    }
  })

  const handleClick = () => {
    setCustomer({
      ...customer,
      address: { 
        ...customer.address, 
        zipCode: 2000 
      }});
  };

  return (
    <div>
      <button onClick={handleClick}>Click</button>
    </div>
  );
}

export default App;