import { useState } from "react";

import "./styles.css";
import Dogs from "./Dogs";
import DogImg from "./DogImg";

export default function App() {
  const [breed, setBreed] = useState();
  console.log(breed);
  return (
    <div className="App">
      <Dogs setBreed={setBreed} />
      {breed && <DogImg breed={breed} />}
    </div>
  );
}
