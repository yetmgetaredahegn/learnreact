import Buttons from "./components/Buttons";
import { useState } from "react";
import Alert from "./components/Alert";
function App() {
  // let items = ["New York", "San Francisco", "Tokyo", "London", "Berlin"];
  // const handleSelectItem = (item: string) => {
  //   console.log(item);
  // }


  const [alertVisibility, setAlertVisibility] = useState(false);
  return (
    <div>
      {alertVisibility && <Alert onClose={() => setAlertVisibility(false)}>This is an alert message!</Alert>}
      <Buttons color="primary" onClick={() => setAlertVisibility(true)} children="btn"/>
    </div>
  );
}

export default App;