import React, { Component } from 'react';
import styled from 'styled-components';
import { colors } from '../config/colors';

const StyledImage=styled.div`
    width: 100%;
    height: 100%;
    object-fit: contain;
    padding: 1rem;
    position: relative;

    img {
        width: 100%;
        height: 100%;
        object-fit: contain;
        filter: opacity(.75) drop-shadow(0 0 0 ${colors.active});
    }
`

class Dinosaur extends Component {
    render() {

        const {dinosaurName} = this.props;

        return (
            <StyledImage>
                <img src={require(`../images/${dinosaurName}.png`)} alt={dinosaurName} />
            </StyledImage> 
        )
    }
}

export default Dinosaur;
