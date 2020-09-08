import React, { Fragment } from 'react'
import tutorials from './TutorialsList'
import './SideNav.css'

function SideNav() {
	// const tutorials = tutorials.map(...)
	let x = 0;

	let tutorialsList = (tutorials.map(tutorial => {
		x++
		let y = 0
		return (
			<Fragment key={x}>
				<div className="tutorial-name">{tutorial.name}</div>
				<div>
					<ul className="subtutorials">
						{
							tutorial.subtutorials.map(
								subtutorial => {
									return (<li key={y++} className="subtutorial">{subtutorial}</li>)
								}
							) 
						}
					</ul>
				</div>
			</Fragment>
		)
	}))

	return (
		<section className="side-nav">
			<div className="tutorial">
				{tutorialsList}
			</div>
		</section>
	)
}

export default SideNav
