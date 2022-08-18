import React from "react";
import { Link } from "react-router-dom";

export default function Start() {
  // const StartHandler=()=>{
  //     Link
  // }
  return (
    <>
      <div>Skribble Game</div>
      <Link to="/lobby">
        <button>Start</button>
      </Link>
    </>
  );
}
