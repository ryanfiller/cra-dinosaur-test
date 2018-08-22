import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Link, withRouter } from 'react-router-dom'
import styled from 'styled-components';

import Navicon from './navicon'

import { colors } from '../config/colors';

class Nav extends Component {

    linkRef = React.createRef();

    constructor() {
        super()
        this.state = {
            navOpen: false,
        }
        this.toggleNav = this.toggleNav.bind(this)
    }

    componentDidMount() {
        const links = Array.from(
            ReactDOM.findDOMNode(this).getElementsByClassName('link')
        )
        
        links.map((link, index) => {
            var degree =  -90 * (index / (this.props.dinosaurs.length - 1))
            link.setAttribute("style", 
                `transform: rotate(${degree}deg);`
            );
        })
    }

    toggleNav() {
        this.setState({
            navOpen: !this.state.navOpen,
        })
    }

    render() {
       return (
        <StyledNav className={this.state.navOpen === true ? 'open' : 'closed'}>
            <Navicon toggleNav={this.toggleNav} />
            <ul>
                {this.props.dinosaurs.map( (dinosaur, index) => {
                    return (
                        <li key={index} ref={this.linkRef} className="link">
                            <Link to={dinosaur}>
                                {dinosaur}
                            </Link>
                        </li>
                    )
                })}
            </ul>
        </StyledNav>
       )
    }
}

const NavWithRouter = withRouter(Nav)
export default NavWithRouter

const StyledNav = styled.nav`

    font-size: 2rem;
    width: 1em;
    position: relative;
    padding: 1rem;
    width: 100%;
    z-index: 1000;

    div { /* navicon */
        height: 1em;
        width: 1em;
        z-index: 500;
        position: absolute;
        top: .5em;
        left: .5em;
    }

    ul {
        margin: 0;
        padding: 0;
        list-style: none;
        height: 1em;
        padding-left: 1em;
        width: 100%;
        position: relative;
        z-index: -1;
        
        li {
            padding-left: 3.5em;
            position: absolute;
            top: 0;
            left: 0;
            transform-origin: center left;
            overflow: hidden;

            &.active {
                font-weight: bold;
                position: relative;
                z-index: 300;
            }

            a {
                color: ${colors.color}
                text-transform: uppercase;
                font-size: .75em;
                text-decoration: none;
            }

            &.active {
                background-color: ${colors.background}

                a {
                    color: ${colors.active}
                }
            }
        }
    }

    &.closed {
        li {
            transform: rotate(0deg) !important;
            padding-left: 1.5em;
        }
    }
`
