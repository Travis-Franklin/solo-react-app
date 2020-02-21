import React from 'react';
import Player from './Player';

class HowManyPlayers extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            amountOfPlayers : "2",
            saveAmountOfPlayers: "1",
            
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(event){
        event.preventDefault();
    }
    handleChange(event){
        this.setState({amountOfPlayers: event.target.value});
    }

    _HowManyPlayers= () =>{
        this.setState({
            saveAmountOfPlayers: this.state.amountOfPlayers
        })
        
    }
    render (){
        console.log(this.props, "look here")
        return (
            <div className="PlayerClass">
                <div>
                <form className="amountOfPlayersForm" onSubmit={this.handleSubmit}>
                <input type="number" onChange={this.handleChange}>
                </input>
                <button  onClick ={(e) => this._HowManyPlayers()}>Amount of Players</button>
                </form>
                </div>
                <Player 
                    numberToWinToPassDown = {this.props.numberToWinToPassDown}
                    numberRemainingToPassDown = {this.props.numberRemainingToPassDown}
                    saveAmountOfPlayers={this.state.saveAmountOfPlayers}
                    _decrementTotalValue={this.props._decrementTotalValue} 
                    _incrementTotalValue = {this.props._incrementTotalValue}
                    
                />
            </div>
        )
    }
    _incrementPlayer = () => {
        this.setState({
            amountOfPlayers : this.state.amountOfPlayers,
        });
    }

};

export default HowManyPlayers;