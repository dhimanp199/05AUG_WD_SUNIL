import React, { Component } from 'react';
import EnhancedComponent from './EnhancedComponent';

class HocClassComoponent extends Component {
    render() {
        console.log('HocClassComoponent');
        const { show, handleclick } = this.props
        return (    
            <div>
                 {/* <EnhancedComponent show="a" handleclick="handleclick"/> */}
                {/* <button onClick={handleclick}>{show}sdf</button>  */}
                <button onClick={handleclick}>{show}</button>
            </div>
        );
    }
}

export default EnhancedComponent(HocClassComoponent);