import { useState } from "react";
import "./App.css";

export default function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <h1>Unnamed Project</h1>
      <p className="read-the-docs">Here's the project</p>

      <Dashboard></Dashboard>
    </>
  );
}

function Dashboard() {
  return (
    <section className="dashboard">
      <Card></Card>
      <Card></Card>
      <Card></Card>
      <Card></Card>
    </section>
  );
}

function Card() {
  return (
    <div className="card">
      <h3 className="title">This is the card title</h3>
      <p className="body">This is the card body</p>
    </div>
  );
}
