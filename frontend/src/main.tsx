import React, { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css';
import RouteManager from './_config/routes/RouteManager';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouteManager />
  </StrictMode>,
)
