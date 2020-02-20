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
        event.preventDefault();
    }
    handleChange(event){
        this.setState({number: event.target.value});
    }

    _SendHowMany = () => {
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
        });
    }

    render () {
        return(
            <div>
               <form onSubmit={this.handleSubmit}>
                   <input type="number" onChange={this.handleChange}>
                   </input>
                   <button type="submit" onClick={(e) => this._SendHowMany()}>
                   Submit</button>
                </form>
               <h1>How Many to Win: {this.state.saveNumber}</h1>
               <h1>How Many Left: {this.state.numberRemaining}</h1>
               <div className="PlayersAndChart">
               <HowManyPlayers _decrementTotalValue={this._decrementTotalValue} _incrementTotalValue = {this._incrementTotalValue}/>
          </div>
            </div>
        )
    }
}

export default HowManyToWin;