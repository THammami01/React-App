import React from 'react'
import SideNav from './SideNav'
import FirstComponent from './FirstComponent'
import './Content.css'

function Content() {
  return (
  	<div className="content">
 		<SideNav />
 		<div className="main">
		   	<FirstComponent />
	   	</div>
  	</div>
  )
}

export default Content