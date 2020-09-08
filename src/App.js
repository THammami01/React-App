import React from 'react'
import "./styles.css"
import Navbar from './Navbar'
import Content from './Content'


function App() {
  return (
    <div className="container">
    	<Navbar  />
		<Content />
    </div>
  )
}

export default App