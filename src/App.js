import React, { useState } from "react";
import "./App.css";

function App() {
  const [data, setData] = useState('World')
  const handleLogin=()=>{
    setData('Taj')
  }
  return (
    <>
      <p>Hello {data}</p>
      <button onClick={handleLogin}>Click Me</button>
    </>
  );
}

export default App;