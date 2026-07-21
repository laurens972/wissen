import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

// Inter lokal ausliefern. Kein Request an fonts.googleapis.com/fonts.gstatic.com
// und damit keine Übermittlung der IP-Adresse an Google (LG München I, 3 O 17493/20).
import '@fontsource/inter/400.css'
import '@fontsource/inter/500.css'
import '@fontsource/inter/600.css'
import '@fontsource/inter/700.css'
import '@fontsource/inter/800.css'

import './index.css'
import App from './App.jsx'
import { ConsentProvider } from './context/ConsentContext'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ConsentProvider>
      <App />
    </ConsentProvider>
  </StrictMode>,
)
