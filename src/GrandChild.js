import React, { Component } from 'react';
import GreatGrandChild from './GreatGrandChild';

class GrandChild extends Component {
    render() {
        return (
            <div>
                <GreatGrandChild />
            </div>
        );
    }
}

export default GrandChild;