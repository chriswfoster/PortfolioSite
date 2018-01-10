import React, {Component} from 'react'
import './secondwindow.css'
import {ParallaxProvider} from 'react-scroll-parallax'
import FirstIconRow from './FirstIconRow'
import SecondIconRow from './SecondIconRow'
import ThirdIconRow from './ThirdIconRow'




export default class SecondWindow extends Component {



    render(){
        return(
            <div className="secondwindow">
                SKILLs:



                <ParallaxProvider>
                <FirstIconRow />
                <SecondIconRow />
                <ThirdIconRow />
                    </ParallaxProvider>

                </div> 
        )
    }
}