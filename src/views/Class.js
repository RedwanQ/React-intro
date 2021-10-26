// https://kekambas-bs.herokuapp.com/kekambas

import React, { Component } from 'react'
import Classinfo from '../components/Classinfo';

export default class Class extends Component {
    constructor(props){
        super(props);
        console.log('Class component constructed')
        this.state = {
            classmates: []
        }
    }

    componentDidMount(){
        console.log('Class component did mount')
        fetch('https://kekambas-bs.herokuapp.com/kekambas')
            .then(res => res.json())
            .then(data => this.setState({
                classmates: data  // racers: data.MRData.StandingsTable.StandingsLists[0].DriverStandings
            }))
    }

    render() {
        console.log('Class component rendered')
        console.log(this.state)
        return (
            <div>
                This is the Class Page
                {this.state.classmates.map((c, i) => <Classinfo key={i} class={c} />)}
            </div>
        )
    }
}