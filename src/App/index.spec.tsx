import { render } from '@testing-library/react'

import App from '.'

describe('Hello Jest', () => {
  it('shoud pass', () => {
    const container = render(<App />)

    expect(container.getByText('teste')).toBeInTheDocument()
  })
})
