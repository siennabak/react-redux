import React ,{Component } from 'react';
import Value from './Value';
import { connect } from 'react-redux';


import * as types from '../actionss'
class Counter extends React.Component{
    constructor(props){
        super(props);
    }
    render(){
        return(
            <Value/>
        )
    }
}


const mapStateToProps = (state) => {
    return {
        number: state.counter.number,
        color: state.ui.number
    }
}

const mapDispatchToProps = (dispatch) => {

}

export default Counter;