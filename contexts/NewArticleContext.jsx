import useNewArticleReducer from "@/lib/hooks/useNewArticleReducer";
import { createContext, useState } from "react";

export const NewArticleContext = createContext();

const NewArticleProvider = ({ children }) => {
  const [state, dispatch] = useNewArticleReducer();

  return (
    <NewArticleContext.Provider value={{ state, dispatch }}>
      {children}
    </NewArticleContext.Provider>
  );
};

export default NewArticleProvider;
