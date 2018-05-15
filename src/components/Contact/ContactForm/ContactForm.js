import React, {Component} from 'react';

class ContactForm extends Component {
    constructor(){
        super()
        this.state = {

        }
    }




    render(){
        return(
            <div>
                <form>
                    <input type="text" placeholder="Name"/>
                    <input type="text" placeholder="Company (optional)"/>
                    <input type="text" placeholder="Phone number"/>
                    <input type="text" placeholder="Email" />
                    <input type="text" placeholder="Type me a message" />
                    <input type="submit" text="test" />
                    </form>

                </div>
        )
    }
}
export default ContactForm;