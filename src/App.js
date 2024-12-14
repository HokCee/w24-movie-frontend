import { useEffect, useState } from 'react'
import axios from 'axios'
import './App.css'
import Container from './Container.js'

const SERVER_URL = 'http://localhost:8080/api/movies'

const App = () => {
  const [ movies, setMovies ] = useState([])

  const getMovie = async () => {
    try {
      const res = await axios.get(SERVER_URL)
      console.log(res)

      setMovies(res.data)
    } catch (err) {
      console.log(err)

      setMovies([])
    }
  }

  useEffect(() => {
    getMovie()
  }, [])

  return (
    <div>
      <Header/>
      <Movielist
        title="인생 영화"
        listMovie={movies}/>
    </div>
  )
}

const Header = () => {
  return (
      <h1>영화 추천</h1>
  )
}

const Movielist = ({title, listMovie}) => {
  return (
    <div className='movielist'>
      <div className='movielist'>{title}</div>
      {
        listMovie.map(movie => 
          <Container key={movie.id} movie={movie}/>)
      }
    </div>
  )
}


export default App
