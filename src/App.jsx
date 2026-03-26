import { useEffect, useState } from "react";



function App() {

  const API_KEY = import.meta.env.VITE_API_KEY

  const api_url = `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&query=ritorno+al+fut`

  const [film, setFilm] = useState([])


  useEffect(() => {
    fetch(api_url)
      .then(res => res.json())
      .then(data => {
        console.log(data.results);
        setFilm(data.results)
      })

  }, [])




  return (
    <>




    </>
  )
}

export default App
