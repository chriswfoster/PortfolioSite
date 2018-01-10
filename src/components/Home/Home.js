import React, {Component} from 'react'
import TopWindow from '../TopWindow/TopWindow'
import AboutMeWindow from '../AboutMe/AboutMeWindow'
import SkillWindow from '../SkillWindow/SkillWindow'
import ThirdWindow from '../ThirdWindow/ThirdWindow'
class Home extends Component {



    render(){
        return(
            <div>
               <TopWindow />
               <AboutMeWindow />
               <SkillWindow />
               <ThirdWindow />
        </div>
        )
    }
}

export default Home