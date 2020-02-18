import React from 'react';

class HowManyToWin extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            number : "1",
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

    // _SendHowMany = () => {
    //     console.log(this.state.number, 'line 11');
    //     let userInput = event.target.number;
    //     this.setState({
    //         number: userInput,
    //     })
    // }



    render () {
        return(
            <div>
               <form onSubmit={this.handleSubmit}>
                   <input type="number" onChange={this.handleChange}>
                   </input>
                   <button type="submit">
                   </button>
                </form>
               <h1>{this.state.number} How Many to Win</h1> 
            </div>
        )
    }
}

export default HowManyToWin;