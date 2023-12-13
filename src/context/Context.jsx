import { createContext, useContext } from "react";
const Context = createContext();

const Provider = ({ children }) => {
  const values = {};

  return <Context.Provider value={values}>{children}</Context.Provider>;
};

export const useData = () => useContext(Context);
export default Provider;
