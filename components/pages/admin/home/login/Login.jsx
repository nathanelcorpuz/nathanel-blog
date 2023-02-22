import { AdminAuthContext } from "@/contexts/AdminAuthContext";
import { useContext } from "react";

export default function Login() {
  const { login } = useContext(AdminAuthContext);
  return (
    <div
      style={{
        display: "flex",
        height: "100vh",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <form
        style={{
          display: "flex",
          flexDirection: "column",
          width: 500,
          gap: 20,
          margin: "0 auto",
        }}
        onSubmit={(e) => {
          e.preventDefault();
          console.log("login clicked");
          login();
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: 5,
          }}
        >
          <label htmlFor="username" style={{ fontSize: "1.5rem" }}>
            Username
          </label>
          <input
            placeholder="admin"
            id="username"
            style={{ fontSize: "1.5rem", padding: 10 }}
          />
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: 5,
          }}
        >
          <label htmlFor="password" style={{ fontSize: "1.5rem" }}>
            Password
          </label>
          <input
            style={{ fontSize: "1.5rem", padding: 10 }}
            id="password"
            type="password"
          />
        </div>
        <button
          style={{ background: "black", color: "white", fontSize: "2rem" }}
        >
          Login
        </button>
      </form>
    </div>
  );
}
