import { useEffect, useState } from 'react'
import './App.css'
import Container from './Container.js'

const App = () => {
  const [ movies, setMovies ] = useState([])

  const getMovie = async () => {
    try {
      const apiUrl = process.env.REACT_APP_API_URL

      const response = await fetch(apiUrl)
      
      if (!response.ok) {
        throw new Error('Network response was not OK')
      }

      const data = await response.json()

      setMovies(data)

    } catch (error) {
      console.error('Error fetching data: ', error)

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
