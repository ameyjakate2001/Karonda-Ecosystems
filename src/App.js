import { Routes, Route, useNavigate } from 'react-router-dom'
import { useState, useEffect } from 'react'
import SearchScreen from './screens/searchScreen'
import ResultScreen from './screens/resultScreen'
import axios from 'axios'
import Pagination from './components/pagination'

function App() {
  const [results, setResults] = useState([])
  const [searches, setSearches] = useState([])
  const [currentPage, setCurrentPage] = useState(1)
  const [postPerPage] = useState(5)

  const navigate = useNavigate()

  useEffect(() => {
    setSearches(JSON.parse(localStorage.getItem('mySearches')))
  }, [])

  const HandleSearch = async (query) => {
    const URL = `https://api.themoviedb.org/3/search/movie?api_key=f523881edc8aa02fdd93a75595a43c58&language=en-US&query=${query} &page=1&include_adult=false`
    const res = await axios.get(URL)
    const { results } = res.data
    setResults(results)
    const allSearches = [query]

    let searchesFromLocalStorage = []

    if (localStorage.getItem('mySearches')) {
      searchesFromLocalStorage = JSON.parse(localStorage.getItem('mySearches'))
      !searchesFromLocalStorage.includes(query) &&
        searchesFromLocalStorage.push(query)
      localStorage.setItem(
        'mySearches',
        JSON.stringify(searchesFromLocalStorage)
      )
    } else {
      localStorage.setItem('mySearches', JSON.stringify(allSearches))
    }

    setSearches(searchesFromLocalStorage)

    navigate('/result?q=' + query)
  }

  //Get Current Posts
  const indexOfLastPost = currentPage * postPerPage
  const indexOfFirstPost = indexOfLastPost - postPerPage
  const currentPosts = results.slice(indexOfFirstPost, indexOfLastPost)

  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber)
  }

  return (
    <main>
      <h3 style={{ textAlign: 'center', margin: '0.8em 0' }}>Movie Search</h3>

      <Routes>
        <Route
          path='/'
          exact
          element={
            <SearchScreen HandleSearch={(input) => HandleSearch(input)} />
          }
        />
        <Route
          path='/result'
          element={<ResultScreen results={currentPosts} />}
        />
      </Routes>
      {window.location.pathname === '/result' && (
        <Pagination
          postPerPage={postPerPage}
          totalPosts={results.length}
          paginate={paginate}
        />
      )}

      <div className='history'>
        <h4>Your searches</h4>
        <ul>
          {searches && searches.map((q, index) => <li key={index}>{q}</li>)}
        </ul>
      </div>
    </main>
  )
}

export default App
