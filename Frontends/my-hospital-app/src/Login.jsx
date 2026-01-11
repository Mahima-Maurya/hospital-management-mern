import { useState } from "react";

export default function Login({ setLoggedInRole }) {
  const [form, setForm] = useState({ email: "", password: "" });

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const loginUser = async () => {
    const res = await fetch("http://localhost:5000/api/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(form)
    });

    const data = await res.json();

    setLoggedInRole(data.role); 
  };

  return (
    <>
      <h2>Login</h2>
      <input name="email" placeholder="Email" onChange={handleChange} /><br/>
      <input name="password" placeholder="Password" onChange={handleChange} /><br/>

      <button onClick={loginUser}>Login</button>
    </>
  );
}
