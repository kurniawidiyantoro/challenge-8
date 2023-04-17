import "./App.css";
import { useState } from "react";

export function CreateNewPlayerForm() {
  const [submittedData, setSubmittedData] = useState();

  function handleSubmit(event) {
    event.preventDefault();

    const formData = new FormData(event.target);
    const jsonData = Object.fromEntries(formData);
    setSubmittedData(jsonData);
  }

  return (
    <div className="card">
      <h2>Create New Player</h2>
      <form onSubmit={handleSubmit} className="card-form">
        <input
          name="username"
          placeholder="username"
          className="input-field"
          required
        />
        <input name="email" placeholder="email" type="email" required />
        <input
          name="password"
          placeholder="password"
          type="password"
          required
        />
        <input name="experience" placeholder="experience" type="experience" />

        <button type="submit">submit</button>
      </form>
      <br></br>
      <br></br>

      {submittedData ? <div className="result">RESULT</div> : null}
      <br></br>
      {submittedData ? (
        <pre>{JSON.stringify(submittedData, null, 2)}</pre>
      ) : null}
    </div>
  );
}

export function EditPlayerForm() {
  const [submittedData, setSubmittedData] = useState();

  function handleSubmit(event) {
    event.preventDefault();

    const formData = new FormData(event.target);
    const jsonData = Object.fromEntries(formData);
    setSubmittedData(jsonData);
  }

  return (
    <div className="card">
      <h2>Edit Player Form</h2>
      <form onSubmit={handleSubmit} className="card-form">
        <input name="username" placeholder="username" required />
        <input name="email" placeholder="email" type="email" required />
        <input
          name="password"
          placeholder="password"
          type="password"
          required
        />
        <input name="experience" placeholder="experience" />
        <button type="submit">edit</button>
      </form>
      <br></br>
      <br></br>

      {submittedData ? <div className="result">RESULT</div> : null}
      <br></br>
      {submittedData ? (
        <pre>{JSON.stringify(submittedData, null, 2)}</pre>
      ) : null}
    </div>
  );
}

export function SearchPlayerForm() {
  const [submittedData, setSubmittedData] = useState();

  function handleSubmit(event) {
    event.preventDefault();

    const formData = new FormData(event.target);
    const jsonData = Object.fromEntries(formData);
    setSubmittedData(jsonData);
  }

  return (
    <div className="card">
      <h2>Search Player</h2>
      <form onSubmit={handleSubmit}>
        <input name="username" placeholder="username" />
        <input name="email" placeholder="email" type="email" />
        <input name="lvl" placeholder="level" />
        <input name="experience" placeholder="experience" />
        <button type="submit">search</button>
      </form>
      <br></br>
      <br></br>

      {submittedData ? <div className="result">RESULT</div> : null}
      <br></br>
      {submittedData ? (
        <pre>{JSON.stringify(submittedData, null, 2)}</pre>
      ) : null}
    </div>
  );
}
