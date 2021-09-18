import React, { useState } from "react";
function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const submitPage = (e) => {
    const data = { email, password };

    fetch("http://localhost:8000/data", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((result) => result.json())
      .then((data) => {
        window.location.href = data.redirect;
      })
      .catch((err) => console.log(err));
  };
  return (
    <>
      <div style={{ textAlign: "center", marginTop: "100px", color: "white" }}>
        <h1>Login Page</h1>
      </div>

      {/* <form method="POST" action="/user"> */}
      <form
        style={{ marginLeft: "32%", marginRight: "32%" }}
        onSubmit={submitPage}
      >
        <div className="mb-3">
          <label className="form-label" style={{ color: "white" }}>
            Email address
          </label>
          <input
            type="email"
            className="form-control"
            name="email"
            autoFocus="On"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
            required
          />
        </div>
        <div>
          <label className="form-label" style={{ color: "white" }}>
            Password
          </label>
          <input
            type="password"
            className="form-control"
            name="password"
            required
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Login
        </button>
        <button
          className="btn btn-primary m-4"
          type="button"
          onClick={() => {
            window.location.href = "/register";
          }}
        >
          Register
        </button>
      </form>
    </>
  );
}

export default Login;
