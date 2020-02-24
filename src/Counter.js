import React from 'react';


class Counter extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
        };
    }
    render () {
        console.log(this.props, 'here for COUNTER')
        return (
        <div>
            <h3>Score:</h3>
        <button onClick ={this._incrementValue}>+</button>
        <button onClick ={this._decrementValue}>-</button>
        <h1>{this.props.player.scores}</h1>
        </div>)
    }
    _incrementValue = () => {
            this.props._incrementScore(this.props.playerIndex);
            this.props._decrementTotalValue();

        }
    _decrementValue = () => {
        this.props._decrementScore(this.props.playerIndex);
        this.props._incrementTotalValue();
    }
};

export default Counter;