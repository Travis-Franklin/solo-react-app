import React from 'react';
import Counter from './Counter';

class Player extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            amountOfPlayers: "1",
            players: [{            
                whom: "Player 1",
                whomSaved: "",
                scores: ""}]
    
        };

    }

    static getDerivedStateFromProps(nextProps, prevState) {
        return {
           amountOfPlayers: nextProps.saveAmountOfPlayers
        };
     }
     componentDidUpdate(prevProps, prevState) {
        if (prevProps.saveAmountOfPlayers !== this.props.saveAmountOfPlayers) {
           this.createNewPlayer()
        }
     }
    handleChange = (e, index) =>{
        console.log(`change:${index}`)
        console.log(e.target.value)
        let tempPlayer = [...this.state.players]
        tempPlayer[index].whom = e.target.value
        this.setState({players: tempPlayer})
        
    }

    createNewPlayer(){
        let tempPlayer = [...this.state.players]
        for (let i = 1; i < this.state.amountOfPlayers; i++ ){
            tempPlayer.push({            
                whom: "Player",
                whomSaved: "",
                scores: ""})
        }
        this.setState({players: tempPlayer})
    }

    _AddPlayer = (e, index) => {
        e.preventDefault();
        this.setState({
            whomSaved: this.state.whom,
        })
        let tempPlayer = [...this.state.players]
        tempPlayer[index].whomSaved = tempPlayer[index].whom
        this.setState({players: tempPlayer})
    }

    render() {
        
        console.log(this.props);
        return (
            <div >
                    {this.state.players.map((player, index) => 
                        <div className="playerBox">
                        <form >
                            <input type="text" onChange={(e)=> this.handleChange(e, index)}>
                            </input>
                            <button type="submit" onClick={(e) => this._AddPlayer(e, index)}>Save Player Name</button>
                        </form>
                        <h1>{this.state.players[index].whomSaved}</h1>
                        <Counter _decrementTotalValue={this.props._decrementTotalValue} _incrementTotalValue = {this.props._incrementTotalValue}/>
                            </div>
                    )}
        
            </div>
        )
    }  
};

export default Player;