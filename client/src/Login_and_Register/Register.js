import React, { useState } from "react";

function Register() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const submitHandler = (e) => {
    const data = { name, email, password };
    fetch("http://localhost:8000/user", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((response) => response.json())
      .then(window.alert("Account Successfully Created! You Can Login Now."))
      .then((data) => {
        window.location.href = data.redirect;
      })
      .catch((err) => console.log(err));
  };

  return (
    <>
      <div style={{ textAlign: "center", marginTop: "100px", color: "white" }}>
        <h1>Create An Account </h1>
      </div>

      {/* <form method="POST" action="/user"> */}
      <form
        onSubmit={submitHandler}
        style={{ marginLeft: "32%", marginRight: "32%" }}
      >
        <div className="mb-3">
          <label style={{ color: "white" }} className="form-label">
            Name :{" "}
          </label>
          <input
            type="text"
            className="form-control"
            name="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
            autoFocus="On"
          />
        </div>
        <div className="mb-3">
          <label style={{ color: "white" }} className="form-label">
            Email address
          </label>
          <input
            type="email"
            className="form-control"
            name="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="mb-3">
          <label style={{ color: "white" }} className="form-label">
            Password
          </label>
          <input
            type="password"
            className="form-control"
            name="password"
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Register
        </button>
        <button
          className="btn btn-primary m-4"
          type="button"
          onClick={() => {
            window.location.href = "/";
          }}
        >
          Login
        </button>
      </form>
    </>
  );
}

export default Register;
