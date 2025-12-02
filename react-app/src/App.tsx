import ListGroup from "./components/ListGroup";
import "./App.css";

function App() {
  let items = ["New York", "San Francisco", "Tokyo", "London", "Berlin"];
  const handleSelectItem = (item: string) => {
    console.log(item);
  }


  // const [alertVisibility, setAlertVisibility] = useState(false);
  return (
    <div>
      <ListGroup items={items} heading="Cities" onSelectItem={handleSelectItem}/>
    </div>
  );
}

export default App;