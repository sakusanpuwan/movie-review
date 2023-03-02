import { useEffect, useState } from 'react';
import './App.css';
import api from './api/axiosConfig';

function App() {

  const [movies,setMovies] = useState([]);

  const getMovies = async () => {

    try {
      const response = await api.get("/api/v1/movies")
      console.log(response.data);
      setMovies(response.data)
    } catch (error) {
      console.log(error);
    }

  }

  const getTest = () => {
    console.log("Hi");
  }

  useEffect(() => {
    getMovies();
    getTest();
  },[])

  return (
    <div className="App">

    </div>
  );
}

export default App;
