import React, { Component } from 'react';
import { injectGlobal } from 'styled-components';
import { BrowserRouter as Router, Switch, Redirect, Route } from 'react-router-dom'
import { TransitionGroup, CSSTransition } from "react-transition-group";

import { dinosaurs } from '../config/dinosaurs'
import { styles } from '../config/styles'

import Dinosaur from './dinosaur';
import Nav from './navigation';


injectGlobal`
  body {
      margin: 0;
      padding: 0;

      * {
        transition: ${styles.transition}ms;
      }
  }

  .fade-enter {
    opacity: 0;
    transform: translateX(-100%);
  }
  
  .fade-enter.fade-enter-active {
    opacity: 1;
    transform: translateX(0)
  }

  .fade-exit {
    opacity: 1;
    position: absolute;
    top: 0;
    left: 0;
    transform: translateX(0)
  }

  .fade-exit.fade-exit-active {
    opacity: 0;
    transform: translateX(100%)
  }

  img {
    width: 300px;
  }
`

class App extends Component {

  render() {

    return (
      <Router>
        <Route
          render={({ location }) => (
            <div>
              {console.log(location)}

              <Nav dinosaurs={dinosaurs} />

              <div style={{position: 'relative'}}>
                <TransitionGroup>
                  <CSSTransition key={location.key} classNames="fade" timeout={{ enter: styles.transition, exit: styles.transition }}>
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
              </div>
            </div>
          )}
        />
      </Router>
    );
  }
}

export default App;