import { createContext, useState, useEffect } from "react";
export const ProductContext = createContext();
export function ProductProvider({ children }) {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    async function fetchData() {
      const response = await fetch("https://api.escuelajs.co/api/v1/products");
      const data = await response.json();
      setData(data);
      setLoading(false);
    }
    fetchData();
  }, []);

  return (
    <ProductContext.Provider value={{ data, loading }}>
      {children}
    </ProductContext.Provider>
  );
}
