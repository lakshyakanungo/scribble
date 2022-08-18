import { Routes, Route } from "react-router-dom";
import "./App.css";
import Lobby from "./components/Lobby";
import Start from "./components/Start";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Start />}></Route>
        <Route path="/lobby" element={<Lobby />} />
      </Routes>
    </div>
  );
}

export default App;
