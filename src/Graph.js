import React from 'react';
import Axios from 'axios';
// import { tsConstructorType } from '@babel/types';

const API_ENDPOINT = `https://quickchart.io/chart?c=${[]}`;

// function urlForID(id) {
//   return `https://swapi.co/api/people/${id}/`
// }

class Graph extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            players: this.props.players,
            chartInfo: {
                type: 'pie',
                data: {
                  labels:[],
                  datasets: [{
                    label: 'Scores',
                    data: []
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
        this.props.players.map((player) => {
            console.log(player.whom);
            ArrayOfPlayers.push(player.whom);
            ArrayOfScores.push(player.scores);

        })
        tempInfo.data.labels = ArrayOfPlayers;
        tempInfo.data.datasets[0].data = ArrayOfScores;
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



