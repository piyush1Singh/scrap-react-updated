import React, { createContext, useEffect, useState } from "react";
import { useContext } from "react";

const categoryContext = createContext();

const CategoryProvider = ({ children }) => {
  const [category, setCategory] = useState();

  const fetchCollection = async () => {
    let url = await fetch(
      "http://localhost/Scrap-react/Admin-panel/Api-Calls/Categories/fetchallCategories.php"
    );
    let data = await url.json();
    setCategory(data);
  };

  useEffect(() => {
    fetchCollection();
  }, []);

  return (
    <categoryContext.Provider value={{ category, setCategory }}>
      {children}
    </categoryContext.Provider>
  );
};

export default CategoryProvider;
export const useCategory = () => useContext(categoryContext);
