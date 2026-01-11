import { useState } from "react";

export default function Register() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
    role: "user"
  });

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const registerUser = async () => {
    const res = await fetch("http://localhost:5000/api/register", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(form)
    });

    alert(await res.text());
  };

  return (
    <>
      <h2>Register</h2>
      <input name="name" placeholder="Name" onChange={handleChange} /><br/>
      <input name="email" placeholder="Email" onChange={handleChange} /><br/>
      <input name="password" placeholder="Password" onChange={handleChange} /><br/>
      
      <select name="role" onChange={handleChange}>
        <option value="user">User</option>
        <option value="admin">Admin (Doctor)</option>
      </select><br/>

      <button onClick={registerUser}>Register</button>
    </>
  );
}
