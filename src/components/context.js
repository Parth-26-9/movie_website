import React, { useContext, useEffect } from "react";
import { useState } from "react";


 export const API_URL = `http://www.omdbapi.com/?apikey=2f0e8a8d`;
// context creation
const Appcontext = React.createContext();

// to create a  provider function

const AppProvider = ({ children }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [movie, setMovie] = useState([]);
  const [query,setQuery]=useState("Avengers")
  const [isError, setIsError] = useState({ show: "false", msg: "" });

  const getMovies = async (API_URL) => {
    try {
      const response = await fetch(API_URL);
      const data = await response.json();
      if (data.Response === "True") {
        setIsLoading(false);
        setMovie(data.Search);
      } else {
        setIsError({
          show: true,
          msg: data.error,
        });
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getMovies(`${API_URL}&s=${query}`);
  }, [query]);

  return (
    <Appcontext.Provider value={{ isLoading, isError, movie,query,setQuery }}>
      {children}
    </Appcontext.Provider>
  );
};

// create custom hook create

const   useGlobalContext = () => {
  return useContext(Appcontext);
};

export { AppProvider, Appcontext, useGlobalContext };
