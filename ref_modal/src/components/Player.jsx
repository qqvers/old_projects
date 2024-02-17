import { useState, useRef } from "react";

export default function Player() {
  const playerName = useRef();

  const [name, setName] = useState("");

  function submitHandler() {
    setName(playerName.current.value);
    playerName.current.value = "";
  }

  return (
    <section id="player">
      <h2>Welcome {name}</h2>
      <p>
        <input ref={playerName} type="text" />
        <button onClick={submitHandler}>Set Name</button>
      </p>
    </section>
  );
}
