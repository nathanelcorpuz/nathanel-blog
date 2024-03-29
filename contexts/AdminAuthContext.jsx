import { createContext, useState } from "react";

export const AdminAuthContext = createContext();

const AdminAuthProvider = ({ children }) => {
  const [authenticated, setAuthenticated] = useState(true); // temporary default value

  const login = () => setAuthenticated(true);
  const logout = () => setAuthenticated(false);

  return (
    <AdminAuthContext.Provider value={{ authenticated, login, logout }}>
      {children}
    </AdminAuthContext.Provider>
  );
};

export default AdminAuthProvider;
