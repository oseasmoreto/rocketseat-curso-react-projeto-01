import { useState } from 'react'
import { Header } from './components/Header'
import { Post } from './components/Post'

import './global.css'

export function App() {
  return (
    <div>
      <Header />
      
      <div className="wrapper"></div>
    </div>
  )
}
