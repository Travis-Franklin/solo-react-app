import React from 'react';
import Axios from 'axios';

const API_ENDPOINT = `https://quickchart.io/chart?c=${[]}`;

class Graph extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            players: this.props.players,
            chartInfo: {
                type: 'doughnut',
                data: {
                    labels:[],
                    datasets: [{
                    label: 'Scores',
                    data: [],
                    backgroundColor: [],
                  }, ]
                }
              }
        }

    }


    static getDerivedStateFromProps(nextProps, prevState) {
        return {
           players: nextProps.players
        };
     }

     componentDidUpdate(prevProps, prevState) {
        if (prevProps.players !== this.props.players) {
           this.createNewChart()
        }
    }

    // _winner = () => {
    //     if (numberRemainingToPassDown === 0){
    //         let winningPlayer = Math.max(ArrayOfScores)
    //     }
    // }
        createNewChart(){ 
        let tempInfo = this.state.chartInfo;
        let ArrayOfPlayers = [];
        let ArrayOfScores = [];
        let ArrayOfColors = [];

        this.props.players.map((player) => {
            ArrayOfPlayers.push(player.whom);
            ArrayOfScores.push(player.scores);
            ArrayOfColors.push(player.color);
            console.log(ArrayOfColors);

        })

        tempInfo.data.labels = ArrayOfPlayers;
        tempInfo.data.datasets[0].data = ArrayOfScores;
        tempInfo.data.datasets[0].backgroundColor = ArrayOfColors;
        ArrayOfPlayers.push("Still Remaining");
        ArrayOfScores.push(this.props.numberRemainingToPassDown);
        ArrayOfColors.push("grey");
        this.setState({chartInfo: tempInfo})
        console.log(ArrayOfScores);
        console.log(ArrayOfPlayers);
    }
        render(){
            console.log(`https://quickchart.io/chart?c=${JSON.stringify(this.state.chartInfo)}`)
            return(
            <img src={`https://quickchart.io/chart?c=${JSON.stringify(this.state.chartInfo)}`}>
            
            </img>
            )
            

            // console.log(this.props, 'this is graph.js');
            // return <h1>Chart Below</h1>;
        }


    }


export default Graph;



