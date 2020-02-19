import React from 'react';

class HowManyToWin extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            number : "1",
            saveNumber: ""
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
        console.log(this.state.number);
        this.setState({
            saveNumber: this.state.number,
        })
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
               <h1>How Many Left: {this.state.saveNumber - 1}</h1>
            </div>
        )
    }
}

export default HowManyToWin;