import React, { Component } from 'react';
import styled from 'styled-components';

class Dinosaur extends Component {
    render() {
        return (
            <p>
                {this.props.dinosaurName}
            </p>
        )
    }
}

export default Dinosaur;
