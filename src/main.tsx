import React from 'react'
import ReactDOM from 'react-dom/client'
import { ThemeProvider } from 'styled-components'
import { App } from './App'
import { GlobalStyle } from './Components/Global/Global.styles'
import { defautlTheme } from './Components/Global/themes/default'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <ThemeProvider theme={defautlTheme}>
      <App />
      <GlobalStyle />
    </ThemeProvider>
  </React.StrictMode>
)
