import React, { Component } from 'react';
import { injectGlobal } from 'styled-components';
import { BrowserRouter, Route } from 'react-router-dom'

import Dinosaur from './dinosaur';
import Nav from './navigation';

import { dinosaurs } from '../config/dinosaurs'


injectGlobal`
  body {
      margin: 0;
      padding: 0;
  }
`

class App extends Component {

  render() {

    return (
      <BrowserRouter>
          <div>
            <Nav dinosaurs={dinosaurs} />

            {dinosaurs.map( (dinosaur, index) => {
              return (
                <Route path={`/${dinosaur}`} key={index}
                  render={() => <Dinosaur dinosaurName={dinosaur} />}
                />
              )
            })}

          </div>
        </BrowserRouter>
    );
  }
}

export default App;