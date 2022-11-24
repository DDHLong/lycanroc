import { createContext, useContext, useState } from "react";

export const RoleContext = createContext();

const RoleProvider = (props) => {
  const [roles, setRoles] = useState([]);
  const value = [roles, setRoles];
  return <RoleContext.Provider value={value} {...props} />;
};

export const useRole = () => {
  const context = useContext(RoleContext);
  if (!context) {
    throw new Error("Missing provider");
  }
  return context;
};

export default RoleProvider;
