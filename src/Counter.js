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
        console.log(this.props.player)
        return (
        <div>
        <button onClick ={this._incrementValue}>+</button>
        <button onClick ={this._decrementValue}>-</button>
        <h1>{this.props.player.scores}</h1>
        </div>)
    }
    _incrementValue = () => {
            this.props._incrementScore(this.props.playerIndex);
            this.props._decrementTotalValue();
            this.setState({
                value: this.state.value + 1
            });
        }
    _decrementValue = () => {
        this.props._decrementScore(this.props.playerIndex);
        this.props._incrementTotalValue();
        this.setState({
            value: this.state.value - 1
        });
    }
};

export default Counter;