import React, { Component } from 'react';
import { TransitionGroup, CSSTransition } from "react-transition-group";
import styled from 'styled-components';

import { styles } from '../config/styles'

const Styles = styled.div`
    background-color: red;

    .dinosaur {
        background: blue;
    }
`

class Dinosaur extends Component {
    render() {

        const {dinosaurName} = this.props;

        return (
            <Styles>
                <TransitionGroup >
                <CSSTransition 
                    classNames="dinosaur"
                    timeout={500}
                >
                    <img src={require(`../images/${dinosaurName}.png`)} alt={dinosaurName}/>
                </CSSTransition>
                </TransitionGroup >
            </Styles>
        )
    }
}

export default Dinosaur;
