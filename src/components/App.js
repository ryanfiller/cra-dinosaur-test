import React, { Component } from 'react';
import styled, { injectGlobal } from 'styled-components';
import { BrowserRouter as Router, Redirect, Route } from 'react-router-dom'

import { dinosaurs } from '../config/dinosaurs'
import { styles } from '../config/styles'

import Nav from './navigation';
import Dinosaurs from './dinosaurs'


injectGlobal`
	body {
		font-family: 'Ubuntu', sans-serif;
		font-size: 12px;
		margin: 0;
		padding: 0;

		* {
			transition: ${styles.transition}ms;
			box-sizing: border-box;
		}
	}
`

const StyledApp = styled.div`	
	& > div { /* router is kind of dumb */
		height: 100vh;
		width: 100vw;
		display: flex;
		flex-direction: column;

		& > div {
			flex: 1;
		}
	}
`

export default class App extends Component {

	render() {
		return (
			<StyledApp>
				<Router>
					<Route
						render={({ location }) => (
							<div>
								<Route
									exact path="/"
									render={() => <Redirect to={dinosaurs[0]} />}
								/>

								<Dinosaurs
									dinosaurs={dinosaurs}
									location={location}
								/>

								<Nav dinosaurs={dinosaurs} />

							</div>
						)}
					/>
				</Router>
			</StyledApp>
		);
	}
}