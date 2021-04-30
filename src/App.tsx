import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import List from "./components/List";
import AddToList from "./components/AddToList";

export interface IState {
  people: {
    name: string;
    age: number;
    url: string;
    note?: string;
  }[];
}

function App() {
  const [people, setPeople] = useState<IState["people"]>([
    {
      name: "Hohn Smith",
      url: "https://i.redd.it/spo5q1n66gg11.jpg",
      age: 36,
      note: "aslkjdasjkdlkasljkdlasjdk",
    },
  ]);
  return (
    <div className="App">
      <h1>Typescript Practice with React</h1>
      <List people={people}></List>
      <AddToList people={people} setPeople={setPeople} />
    </div>
  );
}

export default App;
