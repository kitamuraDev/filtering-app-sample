/* eslint-disable @typescript-eslint/no-non-null-assertion */
/* eslint-disable no-console */
import { useCallback, useEffect, useRef, useState, VFC } from 'react';

import axios from 'axios';

import { User } from 'types/User';

const App: VFC = () => {
  const input = useRef<HTMLInputElement>(null);
  const [users, setUsers] = useState<User[]>([]);
  const [searchQuery, setSearchQuery] = useState<User[]>([]);

  // focus
  useEffect(() => {
    input.current?.focus();
  }, []);

  // axios
  useEffect(() => {
    axios
      .get<User[]>('https://jsonplaceholder.typicode.com/users')
      .then((res) => setUsers(res.data))
      .catch((err) => console.error(err));
  }, []);

  const handleSearch = useCallback(() => {
    if (!input.current!.value.trim()) {
      input.current!.value = '';

      return;
    }

    setSearchQuery(
      users.filter((user) =>
        user.name.toLowerCase().includes(input.current!.value),
      ),
    );
  }, [users]);

  return (
    <div className='App'>
      <div className='main'>
        <input type='text' ref={input} onChange={() => handleSearch()} />
        <div className='content'>
          {input.current?.value === ''
            ? users.map((user) => (
                <div className='box' key={user.id}>
                  <h3>{user.name}</h3>
                  <hr />
                  <p>{user.email}</p>
                </div>
              ))
            : searchQuery.map((user) => (
                <div className='box' key={user.id}>
                  <h3>{user.name}</h3>
                  <hr />
                  <p>{user.email}</p>
                </div>
              ))}
        </div>
      </div>
    </div>
  );
};

export default App;
