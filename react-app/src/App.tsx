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

  useEffect(() => {
    const controller = new AbortController();
    axios
      .get<User[]>('https://jsonplaceholder.typicode.com/users', { signal: controller.signal })
      .then(res => setUsers(res.data))
      .catch((err: unknown) => {
        if (err instanceof CanceledError) return;
        if (err instanceof Error) setError(err.message);
        else setError(String(err));
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