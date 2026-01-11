import { useEffect, useState } from "react";

export default function AdminDashboard() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/api/users")
      .then((res) => res.json())
      .then((data) => setUsers(data));
  }, []);

  return (
    <div>
      <h2>Registered Users</h2>
      {users.map((u) => (
        <p key={u._id}>{u.name} — {u.email}</p>
      ))}
    </div>
  );
}
