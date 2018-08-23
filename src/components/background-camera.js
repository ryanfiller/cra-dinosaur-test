import React, { Component } from 'react';
import styled from 'styled-components';
import Camera from 'react-camera';

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

export default class BackgroundCamera extends Component {

	constructor(props) {
		super(props);
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