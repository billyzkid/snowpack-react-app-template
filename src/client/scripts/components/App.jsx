import React, { useState, useEffect } from 'react';
import io from 'socket.io-client';

const App = (props) => {
  const [greeting, setGreeting] = useState();

  useEffect(() => {
    const socket = io();

    socket.on('new user', (data) => {
      setGreeting(data.greeting);
    });

    return () => socket.disconnect();
  }, []);

  return (
    <div className="app">
      <h1>{greeting}</h1>
    </div>
  );
};

export default App;
