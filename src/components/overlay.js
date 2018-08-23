import React, { Component } from 'react';
import styled from 'styled-components';
import { colors } from '../config/colors';

const StyledOverlay=styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    background: ${colors.background};
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 1rem;

    header {
        text-align: center;
        font-size: 1.75rem;
        color: ${colors.active};
        margin-bottom: 1rem;
    }

    p {
        text-align: center;
        font-size: 1.25rem;
        color: ${colors.color}
        margin-bottom: 1rem;
    }
`

class Overlay extends Component {
    render() {

        return (
            <StyledOverlay>
                <header>Hey, this is a phone only app!</header>
                <p>
                    Have you ever needed to <em>see</em> SEVEN ENTIRE DINOSAURS whenever you want?
                </p>
                <p>
                    Open this link on your phone and "Add to Home Screen" to see these <em>incredible</em> seven dinosaurs! Wow!
                </p>
            </StyledOverlay> 
        )
    }
}

export default Overlay;
