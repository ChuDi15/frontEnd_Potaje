import { useEffect, useState } from "react";
import axios from "axios";

/**
 * 
 * devuelve un objeto con los datos en formato json,
 * el estado de carga o no de los mismos, e indica el tipo de error que pueda suceder
 * @returns @param {data,isLoading,hasError} from BackEnd endpoint
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
