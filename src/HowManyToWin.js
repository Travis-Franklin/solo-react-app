import React from 'react';
import HowManyPlayers from './HowManyPlayers';

class HowManyToWin extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            number : 0,
            saveNumber: 0,
            numberRemaining: 0
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleSubmit(event){
        this._errorHandling();
        event.preventDefault();
    }
    handleChange(event){
        // this._errorHandling();
        this.setState({number: event.target.value});
    }

    _SendHowMany = () => {
        this._errorHandling();
        this.setState({
            saveNumber: Number(this.state.number),
            numberRemaining: Number(this.state.number)
        })
    }

    _incrementTotalValue = () => {
        this.setState({
            numberRemaining: this.state.numberRemaining + 1
        });
    }
    _decrementTotalValue = () => {
        this.setState({
            numberRemaining: this.state.numberRemaining - 1
        }, () => console.log(this.state.numberRemaining, "HERE"));
    }

    _numberRemainingPassDown = () => {
        this.setState ({
            numberRemaining: this.state.numberRemaining
        })
    }

    _errorHandling = () => {
        if (this.state.saveNumber < 0) {
            alert("Amount Must be Greater than Zero")
        };
    }

    render () {
        return(
            <div>
                <div className="titleContainer">
                    <h1>How Many to Win: {this.state.saveNumber}</h1>
                    <h1>How Many Left: {this.state.numberRemaining}</h1>
                </div>
                    <form onSubmit={this.handleSubmit}>
                        <h3>Amount of Points to Win:</h3>
                        <input type="number" onChange={this.handleChange}>
                        </input>
                        <button type="submit" onClick={(e) => this._SendHowMany()}>
                        Submit</button>
                    </form>
               <div className="PlayersAndChart">
               <HowManyPlayers
                numberToWinToPassDown = {this.state.saveNumber}
                numberRemainingToPassDown = {this.state.numberRemaining}
                _numberRemainingPassDown={this._numberRemainingPassDown}
                _decrementTotalValue={this._decrementTotalValue}
                _incrementTotalValue = {this._incrementTotalValue}
                />
          </div>
            </div>
        )
    }
}

export default HowManyToWin;