import { useEffect, useState } from "react";
import ProductList from "./components/ProductList";
import axios, { CanceledError } from "axios";

interface User {
  id: number;
  name: string;
  username: string;
  email: string;
}

function App() {
  const [users, setUsers] = useState<User[]>([]);
  const [error, setError] = useState('')
  const [isLoading,setLoading] = useState(false)

  useEffect(() => {
    const controller = new AbortController();
    setLoading(true)
    axios
      .get<User[]>('https://jsonplaceholder.typicode.com/users', { signal: controller.signal })
      .then(res => {
        setUsers(res.data);
        setLoading(false);
      })
      .catch((err) => {
        if (err instanceof CanceledError) return;
        setError(err.message);
        setLoading(false);
      });

    return () => {
      controller.abort();
    };
  }, [])

  return (
    <>
      {error && <p>{error}</p>}
      <ul>{users.map(user => <li key={user.id}>{user.name}</li>)}</ul>
    </>
  );
}

export default App;