import React from "react";
import { Routes, Route } from "react-router-dom";
import IntroScreen from "./components/pages/IntroScreen";
import QuizScreen from "./components/pages/QuizScreen";
import GameScreen from "./components/pages/GameScreen";
import ResultScreen from "./components/pages/ResultScreen";
import ForFakesSakeScreen from "./components/pages/ForFakesSakeScreen";
import Login from "./components/pages/Login";
import Register from "./components/pages/Register";

function App() {
  return (
    <div>
      <Routes>
        {/* Define your routes */}
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/intro" element={<IntroScreen />} />
        <Route path="/quiz" element={<QuizScreen />} />
        <Route path="/game" element={<GameScreen />} />
        <Route path="/result" element={<ResultScreen />} />
        <Route path="/api2" element={<ForFakesSakeScreen />} />
      </Routes>
    </div>
  );
}

export default App;
