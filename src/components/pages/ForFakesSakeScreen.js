import React from "react";
// import { useNavigate } from "react-router-dom";
import ForFakesSake from "../../DeepFakeApi/ForFakesSake";

function ForFakesSakeScreen() {
  // const navigate = useNavigate();
  //Navigation screen for user to choose to go to end screen, exit or go home.

  return (
    <div className="App">
      <header className="App-header">
        <h1>For Fakes Sake</h1>
        <ForFakesSake url="https://sumsub-sumsub-ffs-demo.hf.space" />
      </header>
    </div>
  );
}

export default ForFakesSakeScreen;
