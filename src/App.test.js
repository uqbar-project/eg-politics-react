import { act, render, screen } from '@testing-library/react'
import App from './App'

test('smoke test for App', async () => {
  act(() => {
    render(<App/>)
  })
  const linkElement = screen.getByText(/Consulta/i)
  expect(linkElement).toBeInTheDocument()
})
