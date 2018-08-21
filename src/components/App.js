import React, { Component } from 'react';
import { injectGlobal } from 'styled-components';
import { BrowserRouter, Route, Link } from 'react-router-dom'

import Dinosaur from './dinosaur';

import { dinosaurs } from '../data/dinosaurs'


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
            <ul>
              {dinosaurs.map( (dinosaur, index) => {
                return (
                  <li key={index}>
                    <Link to={dinosaur}>
                      {dinosaur}
                     </Link>
                  </li>
                )
              })}
            </ul>

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