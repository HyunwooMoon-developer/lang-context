import React, { Component } from 'react';
import Store from './Store';
import LanguageContext from './LanguageContext';

class GreatGrandChild extends Component {
    static contextType= LanguageContext;
    render() {
        const copy = Store[this.context.lang]||{}
        return (
            <section>
                <h2>{copy.title}</h2>
                <p>{copy.body}</p>
                <button onClick={()=>this.context.setLang('klingon')}>
                    klingon!{' '}
                    
                    <span rol='img' aria-label="klingon">🖖</span>
                </button>
            </section>
        );
    }
}

export default GreatGrandChild;