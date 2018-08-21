import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import styled from 'styled-components';

class Nav extends Component {
    render() {
       return (
        <ul>
            {this.props.dinosaurs.map( (dinosaur, index) => {
                return (
                    <li key={index}>
                        <Link to={dinosaur}>
                            {dinosaur}
                        </Link>
                    </li>
                )
            })}
        </ul>
       )
    }
}

export default Nav;
