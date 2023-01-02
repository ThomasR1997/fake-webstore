import { useContext, useEffect } from "react";
import { ApiContext } from "../../contextState/ApiContext";

export const FetchApi = () => {
  const { setApiData } = useContext(ApiContext);

  const fetchData = async (callback) => {
    const response = await fetch("https://fakestoreapi.com/products");

    const data = await response.json();

    callback(data);
  };

  useEffect(() => {
    fetchData(setApiData);
  }, [setApiData]);
};
