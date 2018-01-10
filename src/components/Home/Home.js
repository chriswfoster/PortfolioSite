import React, {Component} from 'react'
import TopWindow from '../TopWindow/TopWindow'
import AboutMeWindow from '../AboutMe/AboutMeWindow'
import SkillWindow from '../SkillWindow/SkillWindow'
import Projects from '../Projects/Projects'
import Contact from '../Contact/Contact'
class Home extends Component {



    render(){
        return(
            <div>
            
               <TopWindow />
               <AboutMeWindow />
               <Projects />
               <SkillWindow />
               <Contact />
        </div>

        )
    }
}

export default Home