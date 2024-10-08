import { useEffect } from 'react'
import AnecdoteForm from './components/AnecdoteForm'
import AnecdoteList from './components/AnecdoteList'
import Notification from './components/Notification'
import Filter from './components/Filter'
import { initializeAnecdotes } from './reducers/anecdoteReducer'
import { useDispatch } from 'react-redux'

const App = () => {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(initializeAnecdotes())
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <div>
      <h2>Anecdotes</h2>
      <Notification />
      <Filter />
      <AnecdoteList />
      <AnecdoteForm /><br></br>
      <i>If there is no data or actions feel broken:</i><br></br>
      <i>As the database runs on free Render.com service, there might be significant delay in actions</i><br></br>
      <i>You might need to refresh this page every couple of minutes. Once it spins up, it will work quite fine</i><br></br>
      <i>Version: 3_dev</i>
    </div>
  )
}

export default App
