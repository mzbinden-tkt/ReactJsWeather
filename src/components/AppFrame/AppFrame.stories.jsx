import React from 'react'
import AppFrame from './AppFrame'
import 'typeface-roboto'
import { BrowserRouter as Router } from 'react-router-dom'
export default {
  title: 'AppFrame',
  component: AppFrame,
}

export const AppFrameExample = () => {
  return (
    <Router>
      <AppFrame>
        lorenipsumlorenipsumlorenipsumlorenipsumlorenipsumlorenipsumlorenipsumlorenipsumlorenipsumlorenipsumlorenipsumlorenipsum
      </AppFrame>
    </Router>
  )
}
