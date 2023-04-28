import './styles/tailwind.css'

import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import { Application } from './app'

const reactRoot = createRoot(document.getElementById('root')!)

reactRoot.render(
  <StrictMode>
    <Application />
  </StrictMode>
)
