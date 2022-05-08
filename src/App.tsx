import { useEffect, useRef, VFC } from 'react';

const App: VFC = () => {
  const input = useRef<HTMLInputElement>(null);

  useEffect(() => {
    input.current?.focus();
  }, []);

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
