import React from 'react';

class HowManyToWin extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            value: "",
        };
        // this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleSubmit(event){
        event.preventDefault();
    }
    handleChange(event){
        event.handleChange();
    }

    _SendHowMany = () => {
        console.log(this.state.value, 'line 11');
        let userInput = event.target.value;
        this.setState({
            value: userInput,
        })
    }



    render () {
        return(
            <div>
               <form onSubmit={this.handleSubmit}>
                   <input type="number">
                   </input>
                   <button type="submit" onClick={this._SendHowMany}></button>
                </form>
               <h1>{this.state.value} How Many to Win</h1> 
            </div>
        )
    }
}

export default HowManyToWin;