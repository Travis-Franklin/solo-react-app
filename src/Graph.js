import React from 'react';


class Graph extends React.Component {
    constructor(props){
        super(props);

    }
    render(){
        console.log(this.props, 'this is graph.js')
        return <h1>Chart Below</h1>;
    }
}

export default Graph;