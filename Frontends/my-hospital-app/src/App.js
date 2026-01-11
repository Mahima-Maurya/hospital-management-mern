import { useState } from "react";
import Register from "./Register";
import Login from "./Login";
import AdminDashboard from "./AdminDashboard";

function App() {
  const [role, setRole] = useState(null);

  return (
    <div>
      {!role && (
        <>
          <Register />
          <Login setLoggedInRole={setRole} />
        </>
      )}

      {role === "admin" && <AdminDashboard />}
      {role === "user" && <h2>Welcome User</h2>}
    </div>
  );
}

export default App;
