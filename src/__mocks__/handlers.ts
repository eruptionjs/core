import { HttpResponse, http } from 'msw'

export const handlers = [
  http.get('https://api.github.com/repos/eruptionjs/core', () => {
    return HttpResponse.json({
      name: 'core',
      full_name: 'eruptionjs/core',
      html_url: 'https://github.com/eruptionjs/core',
      description: 'Boilerplate for React/Typescript, built on top of Vite ⚡️',
    })
  }),
]
