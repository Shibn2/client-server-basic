import React from 'react';

const App: React.FC = () => {
  const clickHandler = () => {
    console.log('Button clicked!');
  };
  return (
    <div>
      <h1>Hello, SSR React with Express!</h1>
      <p>This is rendered on the server.</p>
      <button onClick={clickHandler}>Clik me!</button>
    </div>
  );
};

export default App;
