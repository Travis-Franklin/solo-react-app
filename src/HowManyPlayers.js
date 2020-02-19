import React from 'react';
import Player from './Player';
import Counter from './Counter';

class HowManyPlayers extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            amountOfPlayers : "2",
            saveAmountOfPlayers: "1"
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
        // console.log(this.state.amountOfPlayers);
        this.setState({
            saveAmountOfPlayers: this.state.amountOfPlayers
        })
        
    }
    render (){
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                <input type="number" onChange={this.handleChange}>
                
                </input>

                <button onClick ={(e) => this._HowManyPlayers()}>Amount of Players</button>
                </form>
                <Player saveAmountOfPlayers={this.state.saveAmountOfPlayers}/>
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