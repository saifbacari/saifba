import * as React from "react"
import * as ReactDOM from "react-dom/client"
import 'react-pdf/dist/esm/Page/AnnotationLayer.css';
import 'react-pdf/dist/esm/Page/TextLayer.css';
import { BrowserRouter } from "react-router-dom"
import { Analytics } from "@vercel/analytics/react";
import App from './App'
import './index.css'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <BrowserRouter>
    <App />
    <Analytics />
  </BrowserRouter>,
)
