import React from 'react';
import Axios from 'axios';

const API_ENDPOINT = `https://quickchart.io/chart?c=${[]}`;

class Graph extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            players: this.props.players,
            chartInfo: {
                type: 'pie',
                data: {
                // cutoutPercentage: 50,
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
        // push in a player still left
        // push in still left score
        tempInfo.data.labels = ArrayOfPlayers;
        tempInfo.data.datasets[0].data = ArrayOfScores;
        tempInfo.data.datasets[0].backgroundColor = ArrayOfColors;
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



