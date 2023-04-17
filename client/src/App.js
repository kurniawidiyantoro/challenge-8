import "./App.css";
import { useState } from "react";
import {
  CreateNewPlayerForm,
  EditPlayerForm,
  SearchPlayerForm,
} from "./controller";

function App() {
  return (
    <div className="container">
      <CreateNewPlayerForm />
      <EditPlayerForm />
      <SearchPlayerForm />
    </div>
  );
}

export default App;
