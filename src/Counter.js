import React from 'react';

//receive props from player and the write functions, add button to increment, decrement


class Counter extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            value: 0
        };
    }
    render () {
        return (
        <div>
        <button onClick ={this._incrementValue}>+</button>
        <button onClick ={this._decrementValue}>-</button>
        <h1>{this.state.value}</h1>
        </div>)
    }
    _incrementValue = () => {
            this.setState({
                value: this.state.value + 1
            });
        }
    _decrementValue = () => {
        this.setState({
            value: this.state.value - 1
        });
    }
};

export default Counter;