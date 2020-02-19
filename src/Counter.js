import React from 'react';

//receive props from player and the write functions, add button to increment, decrement


class Counter extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            value: 1
        };
    }
    render () {
        return (
        <div>
        <button onClick ={this._incrementValue}>+</button>
        <h1>{this.state.value}</h1>
        </div>)
    }
    _incrementValue = () => {
            this.setState({
                value: this.state.value + 1
            });
        }
};

export default Counter;