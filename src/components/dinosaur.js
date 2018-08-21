import React, { Component } from 'react';
import styled from 'styled-components';

class Dinosaur extends Component {
    render() {

        const {dinosaurName} = this.props;

        return (
            <div>
                <img src={require(`../images/${dinosaurName}.png`)} alt={dinosaurName}/>
            </div>
        )
    }
}

export default Dinosaur;
