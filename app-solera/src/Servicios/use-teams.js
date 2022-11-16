import { useEffect, useState } from "react";
import axios from "axios";

/**
 * 
 * Esta función devuelve la información de la base de datos
 * @returns @param {data,isLoading,hasError} from BBDD
 */
export const useFetch = (url) => {
  const [state, setState] = useState({
    data: null,
    isLoading: true,
    hasError: null,
  });

  const getFetch = async () => {
    setState({ ...state, isLoading: true });
    const res = await fetch(url);
    const data = await res.json();
    setState({
      data,
      isLoading: false,
      hasError: null,
    });
  };

  useEffect(() => {
    getFetch();
  }, [url]);

  return {
    data: state.data,
    isLoading: state.isLoading,
    hasError: state.hasError,
  };
};
