import { render, screen, waitFor } from '@testing-library/react'
import userEvent from '@testing-library/user-event'

import { App } from './'

describe('App', () => {
  test('should return the correct text', () => {
    render(<App />)

    expect(screen.getByText('Vite + React')).toBeInTheDocument()
  })

  test('should return 1 when the user click one time at button', () => {
    render(<App />)

    const buttonElement = screen.getByRole('button')
    expect(screen.queryByText('count is 0')).toBeInTheDocument()

    userEvent.click(buttonElement)

    waitFor(() => expect(screen.queryByText('count is 1')).toBeInTheDocument())
  })
})
