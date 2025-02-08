import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import LifeTrackerWeekly from './life-tracker-components/LifeTracker'
import Legend from './life-tracker-components/Legend';
import Navbar from './life-tracker-components/Navbar';


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Navbar/>
    <LifeTrackerWeekly/>
    <Legend/>
  </StrictMode>,
)
