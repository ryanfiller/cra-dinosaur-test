import React, { Component } from 'react';
import styled from 'styled-components';

import { colors } from '../config/colors'

const StyledNavicon = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    cursor: pointer;

    &:before, &:after {
        content: '';
    }

    &:before, &:after, span {
        display: block;
        height: .25rem;
        width: 100%;
        background-color: ${colors.color};
        margin: 0 auto;
        max-width: 100%;
    }

    .open & {
        background: green;
    }
`

export default class Navicon extends Component {
    render() {
        return (
            <StyledNavicon onClick={this.props.toggleNav}>
                <span></span>
            </StyledNavicon>
        )
    }
}
