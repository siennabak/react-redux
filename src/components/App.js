import React ,{ Component } from 'react';
import Counter from './Counter';

class App extends React.Component{

    render() {
        return (
            <div>
                <div>0</div>
                <Counter/>
            </div>
            
        )
    }
}

export default App; 