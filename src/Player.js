import React from 'react';

class Player extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            whom: "Player 1",
            whomSaved: "",
            saveAmountOfPlayers: ""
    
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);

    }
    handleSubmit(event){
        event.preventDefault();
    }

    handleChange(event){
        this.setState({whom: event.target.value});
    }

    _AddPlayer = () => {
        this.setState({
            whomSaved: this.state.whom,
        })
    }

    render() {
        console.log(this.props.saveAmountOfPlayers);
        return (
            <div>
                {}
                <form onSubmit={this.handleSubmit}>
                    <input type="text" onChange={this.handleChange}>
                    </input>
                    <button type="submit" onClick={(e) => this._AddPlayer()}>Submit</button>
                </form>
                <h1>{this.state.whomSaved}</h1>
            </div>
        )
    }  
};

export default Player;