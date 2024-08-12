import { render, screen } from '@testing-library/react'
import { Provider } from 'react-redux'
import axios from 'axios'
import App from '../src/App'
import store from '../src/store'
import { describe, expect } from 'vitest'

vi.mock('axios')

describe('App component renders', () => {
  beforeEach(async () => {
    axios.get.mockResolvedValue({
      data: [
        { id: 1, content: 'Anecdote 1', votes: 1 },
        { id: 2, content: 'Anecdote 2', votes: 2 },
        { id: 3, content: 'Anecdote 3', votes: 3 }
      ]
    })
    render(
      <Provider store={store}>
        <App />
      </Provider>
    )
  })

  test('AnecdoteForm rendered', () => {
    expect(screen.getByTestId('anecdote-form')).toBeInTheDocument()
  })

  test('AnecdoteList rendered', () => {
    expect(screen.getByTestId('anecdote-list')).toBeInTheDocument()
  })

  test('Notification rendered', () => {
    expect(screen.getByTestId('notification')).toBeInTheDocument()
  })

  test('Filter rendered', () => {
    expect(screen.getByTestId('filter')).toBeInTheDocument()
  })
})