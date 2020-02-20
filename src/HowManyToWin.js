import React from 'react';
import HowManyPlayers from './HowManyPlayers';

class HowManyToWin extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            number : "1",
            saveNumber: "",
            numberRemaining: ""
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
    HowManyLeft(){
        // this.state.saveNumber-total of all candidates combined sta
    }

    _SendHowMany = () => {
        console.log(this.state.number);
        this.setState({
            saveNumber: this.state.number,
            numberRemaining: this.state.number
        })
    }

    _incrementTotalValue = () => {
        this.setState({
            value: this.state.numberRemaining + 1
        });
    }
    _decrementTotalValue = () => {
        this.setState({
            value: this.state.numberRemaining - 1
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
              <h1>Future Chart Below</h1>
          </div>
            </div>
        )
    }
}

export default HowManyToWin;