import React from 'react';
import Counter from './Counter';
import Graph from './Graph';

class Player extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            amountOfPlayers: "1",
            players: [{            
                whom: "Player 1",
                whomSaved: "",
                scores: 0,
                color: ""
            }]
    
        };

    }
    _incrementScore = (index) => {
        let tempPlayer = [...this.state.players]
        tempPlayer[index].scores = tempPlayer[index].scores + 1
        this.setState({players: tempPlayer})
    }
    _decrementScore = (index) => {
        let tempPlayer = [...this.state.players]
        tempPlayer[index].scores = tempPlayer[index].scores - 1
        this.setState({players: tempPlayer})
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
        let tempPlayer = [...this.state.players]
        tempPlayer[index].whom = e.target.value
        this.setState({players: tempPlayer})
    }

    handleChangeColor = (e, index) =>{
        let tempPlayer = [...this.state.players]
        tempPlayer[index].color = e.target.value
        this.setState({players: tempPlayer})
        console.log(this.state.players)
    }

    createNewPlayer(){
        let tempPlayer = [...this.state.players]
        for (let i = 1; i < this.state.amountOfPlayers; i++ ){
            tempPlayer.push({            
                whom: "Player",
                whomSaved: "",
                scores: 0,
                color: "",
                value: 0
            })
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
        return (
            <div>
                <div className="resultsBox">
                    {this.state.players.map((player, index) => 
                        <div className="playerBox">
                            <form >
                                <input type="text" onChange={(e)=> this.handleChange(e, index)}>
                                </input>
                                <button type="submit" onClick={(e) => this._AddPlayer(e, index)}>Save Player Name</button>
                            </form>
                            <select id="color" onChange={(e)=> this.handleChangeColor(e, index)}>
                                <option value="red">red</option>
                                <option value="green">green</option>
                                <option value="blue">blue</option>
                                <option value="purple">purple</option>
                            </select>
                            <h1>{this.state.players[index].whomSaved}</h1>
                            <Counter 
                                playerIndex={index}
                                player={player} 
                                _decrementTotalValue={this.props._decrementTotalValue} 
                                _incrementTotalValue = {this.props._incrementTotalValue}
                                _decrementScore= {this._decrementScore}
                                _incrementScore= {this._incrementScore}
                                />
                        </div>
                    )}
                    <div>
                    {this.state.players.map((player, index) =>
                        <Graph 
                        playerForGraph={player} 
                        playerForGraphIndex={index}
                        />

                    )}
                    </div>

                     </div>
            </div>
        )
    }  
};

export default Player;