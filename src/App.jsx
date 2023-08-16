import { useState } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <h1>Unnamed Project</h1>
      <p className="read-the-docs">Here's the project</p>
    </>
  );
}

export default App;
