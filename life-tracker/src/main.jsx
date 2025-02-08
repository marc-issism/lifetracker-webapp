import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import LifeTrackerWeekly from './life-tracker-components/LifeTracker'
import Legend from './life-tracker-components/Legend';


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <LifeTrackerWeekly/>
    <Legend/>
  </StrictMode>,
)
