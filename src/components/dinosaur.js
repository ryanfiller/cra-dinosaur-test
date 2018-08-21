import React, { Component } from 'react';

class Dinosaur extends Component {
    render() {

        const {dinosaurName} = this.props;

        return (
            <img src={require(`../images/${dinosaurName}.png`)} alt={dinosaurName}/>
        )
    }
}

export default Dinosaur;
