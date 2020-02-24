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
        this._errorHandling();
        this.setState({
            saveAmountOfPlayers: this.state.amountOfPlayers
        })
        
    }

    _errorHandling = () => {
        if (this.props.numberToWinToPassDown === 0) {
            alert("Must Enter Amount to Win!")
        };
    }
    render (){
        // console.log(this.props.numberToWinToPassDown);
        
        console.log(this.props, "look here")
        return (
            <div className="playerClass">
                <div>
                    <h3>How Many Players:</h3>
                    <form className="amountOfPlayersForm" onSubmit={this.handleSubmit}>
                        <input type="number" onChange={this.handleChange}>
                        </input>
                        <button  onClick ={(e) => this._HowManyPlayers()}>Submit</button>
                    </form>
                </div>
                <div>
                <Player 
                    numberToWinToPassDown = {this.props.numberToWinToPassDown}
                    numberRemainingToPassDown = {this.props.numberRemainingToPassDown}
                    saveAmountOfPlayers={this.state.saveAmountOfPlayers}
                    _decrementTotalValue={this.props._decrementTotalValue} 
                    _incrementTotalValue = {this.props._incrementTotalValue}
                    
                />
                </div>
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