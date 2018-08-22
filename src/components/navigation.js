import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Link, withRouter } from 'react-router-dom'
import styled from 'styled-components';

import Navicon from './navicon'

import { styles } from '../config/styles'
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
            var degree =  90 + (-90 * (index / (this.props.dinosaurs.length - 1)))
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
        {console.log(this.props.location)}
            <Navicon toggleNav={this.toggleNav} />
            <ul>
                {this.props.dinosaurs.map( (dinosaur, index) => {
                    return (
                        <li key={index} ref={this.linkRef} className={this.props.location.pathname === `/${dinosaur}` ? 'link active' : 'link'}>
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
        right: .5em;
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
            position: absolute;
            padding: 0 3.5em 0 1rem;
            top: 0;
            right: 0;
            transform-origin: center right;
            width: 100%;
            text-align: right;

            a {
                color: ${colors.color}
                text-transform: uppercase;
                font-size: .75em;
                text-decoration: none;
            }

            &.active {
                font-weight: bold;
                position: relative;
                z-index: 500;

                a {
                    color: ${colors.active};
                    text-shadow: .5rem .5rem .5em ${colors.background},
                                 1rem 1rem .5em ${colors.background},
                                 -.5rem .5rem .5em ${colors.background},
                                 -1rem 1rem .5em ${colors.background},
                                 .5rem -.5rem .5em ${colors.background},
                                 1rem -1rem .5em ${colors.background},
                                 -.5rem -.5rem .5em ${colors.background},
                                 -1rem -1rem .5em ${colors.background};
                }
            }
        }
    }

    &.open {
        li {
            &.active {
                background-color: transparent;
            }
        }
    }

    &.closed {
        li {
            transform: rotate(0deg) !important;
            padding-right: 1.5em;
            opacity: 0;

            &.active {
                opacity: 1;
            }
        }
    }
`
