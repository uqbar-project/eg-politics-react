import { render, screen } from '@testing-library/react'
import App from './App'
import { afterEach, beforeEach, describe, expect, test, vi } from 'vitest'
import { zonaService } from './services/zonaService'

describe('App', () => {

  beforeEach(() => {
    vi.spyOn(zonaService, 'zonas').mockImplementation(() => Promise.resolve([]))
  })

  test('smoke test for App', () => {
    render(<App />)
    const linkElement = screen.getByText(/Consulta/i)
    expect(linkElement).toBeTruthy()
  })
  
  afterEach(() => {
    vi.restoreAllMocks()
  })

})