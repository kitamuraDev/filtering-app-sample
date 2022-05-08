/* eslint-disable no-console */
import { useEffect, useRef, useState, VFC } from 'react';

import axios from 'axios';

import { User } from 'types/User';

const App: VFC = () => {
  const input = useRef<HTMLInputElement>(null);
  const [users, setUsers] = useState<User[]>([]);

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

  return (
    <div className='App'>
      <div className='main'>
        <h2>検索アプリ</h2>
        <input type='text' ref={input} />
        <div className='content'>
          {users.map((user) => (
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
