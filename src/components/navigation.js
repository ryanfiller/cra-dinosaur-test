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

    handleClick(e) {
        e.preventDefault()
        this.props.history.push(e.target.getAttribute('href'))
        this.toggleNav()
        localStorage.setItem('dinosaur', e.target.getAttribute('href').replace('/', ''))
    }

    render() {
       return (
        <StyledNav className={this.state.navOpen === true ? 'open' : 'closed'}>
            <Navicon toggleNav={this.toggleNav} />
            <ul>
                {this.props.dinosaurs.map( (dinosaur, index) => {
                    return (
                        <li key={index} ref={this.linkRef} className={this.props.location.pathname === `/${dinosaur}` ? 'link active' : 'link'}>
                            <Link to={dinosaur} onClick={(e) => this.handleClick(e)}>
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

    font-size: 1.5rem;
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
        top: 1rem;
        right: 1rem;
    }

    ul {
        margin: 0;
        padding: 0;
        list-style: none;
        height: 1em;
        width: 100%;
        position: relative;
        z-index: -1;
        
        li {
            position: absolute;
            /* padding: 0 3.5em 0 0; */
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
                margin-right: 4em;
            }

            &.active {
                position: relative;
                z-index: 500;

                a {
                    color: ${colors.active};
                    text-shadow: .5rem .5rem .5em ${colors.background},
                                 -.5rem .5rem .5em ${colors.background},
                                 .5rem -.5rem .5em ${colors.background},
                                 -.5rem -.5rem .5em ${colors.background};
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
            opacity: 0;

            &.active {
                opacity: 1;
            }

            a {
                margin-right: 2em;
            }
        }
    }
`
