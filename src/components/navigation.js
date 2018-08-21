import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import styled from 'styled-components';

import { colors } from '../config/colors';

const StyledNav = styled.ul`
    li a {
        color: ${colors.red};
    }
`

class Nav extends Component {
    render() {
       return (
        <StyledNav>
            {this.props.dinosaurs.map( (dinosaur, index) => {
                return (
                    <li key={index}>
                        <Link to={dinosaur}>
                            {dinosaur}
                        </Link>
                    </li>
                )
            })}
        </StyledNav>
       )
    }
}

export default Nav;
