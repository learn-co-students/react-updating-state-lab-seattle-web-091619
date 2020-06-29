import React, { Component } from 'react'

export class DigitalClicker extends Component {



    constructor(){
        super();
        this.state = {
            timesClicked: 0
        };
    }


    incrementer= () => {
        this.setState({
            timesClicked: this.state.timesClicked + 1
        })
    }
                                                               

    render() {
        return (
            <div>
                <button onClick={this.incrementer}>{this.state.timesClicked}</button>
            </div>
        )
    }
}

export default DigitalClicker
