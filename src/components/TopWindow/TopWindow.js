import React, {Component} from 'react'

import './topwindow.css'



export default class TopWindow extends Component {


    render(){
        return(
            <div className="window">
            <div>
        <p className="topname">Chris Foster</p>
        <p>FULL STACK WEB DEVELOPER</p></div>
        <img src={require('./arrow')} />
                </div>
        )
    }

}