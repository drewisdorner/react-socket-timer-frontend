import React, { useEffect, useState } from 'react';
import socketIOClient from 'socket.io-client';
import './App.css';
const ENDPOINT = "https://react-socket-time.herokuapp.com/";

function App() {
  const [response, setResponse] = useState("");

  useEffect(() => {
    const socket = socketIOClient(ENDPOINT);
    socket.on("FromAPI", data => {
      setResponse(data);
    })
  }, []);
  
  return (
    <div className="App">
      <header className="App-header">
        <h1>React Time</h1>
        <p>The current time is:</p>
        <code><time dateTime={response}>{response}</time></code>
      </header>
    </div>
  );
}


export default App;
