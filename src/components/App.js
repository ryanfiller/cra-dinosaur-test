import React, { Component } from 'react';
import styled, { injectGlobal } from 'styled-components';
import { BrowserRouter as Router, Redirect, Route } from 'react-router-dom'
import { BrowserView, MobileView, isBrowser, isMobile } from "react-device-detect";
import Camera from 'react-camera';

import { dinosaurs } from '../config/dinosaurs'
import { styles } from '../config/styles'
import { colors } from '../config/colors'

import Overlay from './overlay';
import Nav from './navigation';
import Dinosaurs from './dinosaurs'

// require("typeface-ubuntu")

injectGlobal`
	body {
		font-family: 'Ubuntu', sans-serif;
		font-size: 12px;
		margin: 0;
		padding: 0;
		background-color: ${colors.background}

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
		overflow: hidden;
		display: flex;
		flex-direction: column;

		& > div {
			flex: 1;
		}
	}
`

export default class App extends Component {

	constructor(props) {
		super(props);
	
		if (localStorage.getItem('dinosaur')) {
			var localDinsoaur = localStorage.getItem('dinosaur')
		}

		this.state = {
			dinosaur: localDinsoaur,
		};

		this.takePicture = this.takePicture.bind(this);
	}

	takePicture() {
		this.camera.capture()
		.then(blob => {
			this.img.src = URL.createObjectURL(blob);
			this.img.onload = () => { URL.revokeObjectURL(this.src); }
		})
	}

	componentDidMount() {
		// window.screen.orientation.lock('portrait-primary')
	}

	render() {
		return (
			<div>
				<BrowserView>
					<Overlay />
				</BrowserView>
				<MobileView>
					<StyledApp>
							<Router>
								<Route
									render={({ location }) => (
										<div>
											<Route
												exact path="/"
												render={() => <Redirect to={this.state.dinosaur ? this.state.dinosaur : dinosaurs[0]} />}
											/>

											<div style={style.container}>
													<Camera
														style={style.preview}
														ref={(cam) => {
															this.camera = cam;
														}}
													>
														<div style={style.captureContainer} onClick={this.takePicture}>
															<div style={style.captureButton} />
														</div>
													</Camera>
														<img
														style={style.captureImage}
														ref={(img) => {
															this.img = img;
														}}
													/>
											</div>
		
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
				</MobileView>
			</div>
		);
	}
}

const style = {
	preview: {
	  position: 'absolute',
	  top: '0', right: '0', bottom: '0', left: '0'
	},
	captureContainer: {
	  display: 'flex',
	  position: 'absolute',
	  justifyContent: 'center',
	  zIndex: 1,
	  bottom: 0,
	  width: '100%',
	},
	captureButton: {
	  backgroundColor: '#fff',
	  borderRadius: '50%',
	  height: 56,
	  width: 56,
	  color: '#000',
	  margin: 20
	},
	captureImage: {
	  width: '100%',
	}
  };