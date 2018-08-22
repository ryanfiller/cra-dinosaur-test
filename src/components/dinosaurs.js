import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom'
import { TransitionGroup, CSSTransition } from "react-transition-group";
import styled, {injectGlobal} from 'styled-components';

import Dinosaur from './dinosaur'

import { styles } from '../config/styles'


const Styles = styled.div`

    position: relative;
    width: 100vw;
    height: 100vw;
    background: red;

    .dinosaur-enter {
        opacity: 0;
        transform: translateX(-100%);
    }
    
    .dinosaur-enter.dinosaur-enter-active {
        opacity: 1;
        transform: translateX(0)
    }

    .dinosaur-exit {
        opacity: 1;
        position: absolute;
        top: 0;
        left: 0;
        transform: translateX(0)
    }

    .dinosaur-exit.dinosaur-exit-active {
        opacity: 0;
        transform: translateX(100%)
    }

    img {
        width: 300px;
    }
`


class Dinosaurs extends Component {

    render() {
        
        const {location, dinosaurs} = this.props;

        return (
            <Styles>
                <TransitionGroup>
                    <CSSTransition key={location.key} classNames="dinosaur" timeout={styles.transition}>
                        <Switch location={location}>
                            {dinosaurs.map( (dinosaur, index) => {
                            return (
                                <Route path={`/${dinosaur}`} key={index}
                                render={() => <Dinosaur dinosaurName={dinosaur} />}
                                />
                            )
                            })}
                        </Switch>
                    </CSSTransition>
                </TransitionGroup>
            </Styles>
       )
    }
}

export default Dinosaurs;