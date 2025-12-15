import { useState } from "react";
import ProductList from "./components/ProductList";

function App() {
  const [category, setCategory] = useState('');

  return (
    <>
      <select name="" id="" className="form-select"onChange={event=>setCategory(event.target.value)}>
        <option value=""></option>
        <option value="Clothing">Clothing</option>
        <option value="HouseHold">House Hold</option>
      </select>
      <ProductList category={category}/>
    </>
  );
}

export default App;