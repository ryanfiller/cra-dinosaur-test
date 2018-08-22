import React, { Component } from 'react';
import styled from 'styled-components';

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
        background: blue;
        height: 2px;
        width: 100%;
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
