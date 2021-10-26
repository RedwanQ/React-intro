import React, { Component } from 'react'

export default class Classinfo extends Component {
    render() {
        return (
            <div>
                <li> first_name 
                <h4>{this.props.classmates}</h4>
                </li>
            </div>
        )
    }
}
