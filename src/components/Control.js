import React, { Component, PropTypes } from 'react';

function makeWarning (funcName) {
    return () => console.warn(funcName + 'is not defined');
}
const defaultProps = {
    onPlus: makeWarning('onPlus'),
    onSubract: makeWarning('onSubract'),
    onRandomizeColor: makeWarning('onRandomizeColor')

}
=
class Value extends React.Component{
   
    render(){
        return(
            <div>
                <button onClick={this.props.onPlus}>+</button>
                <button onClick={this.props.onSubract}>-</button>
                <button onClick={this.props.onRandomizeColor}>Randomize color</button>
            </div>
        )
    }

}

export default Value; 