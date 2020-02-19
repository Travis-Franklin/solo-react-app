import React from 'react';
import Player from './Player';
import Counter from './Counter';

class HowManyPlayers extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            amountOfPlayers : "2"
        };
    }

    _HowManyPlayers= () =>{
        console.log(this.state.amountOfPlayers);
    }
    render (){
        return (
            <div>
                <Player/>
                <Counter/>
                {/* <button onClick ={this._incrementPlayer}>{this.state.amountOfPlayers}+</button> */}
            </div>
        )
    }
    _incrementPlayer = () => {
        this.setState({
            amountOfPlayers : this.state.amountOfPlayers + 1
        });
    }

};

export default HowManyPlayers;