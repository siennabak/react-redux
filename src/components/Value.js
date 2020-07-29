import React, { Component, PropTypes } from 'react';



const defaultProps = {
    number: -1
}


class Value extends React.Component{
   

    render(){
        return(
            <div>
               <h1>{this.props.number}</h1>
            </div>
        )
    }

}

export default Value; 