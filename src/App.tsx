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

  console.log(users);

  return (
    <div className='App'>
      <div className='main'>
        <h2>検索アプリ</h2>
        <input type='text' ref={input} />
        <div className='content'>
          <div className='box'>
            <h3>ユーザー名</h3>
            <hr />
            <p>メールアドレス</p>
          </div>
          <div className='box'>
            <h3>ユーザー名</h3>
            <hr />
            <p>メールアドレス</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
