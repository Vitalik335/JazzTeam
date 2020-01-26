import React, {Component} from 'react'
import logo from './watermelon.jpg'
class Home extends Component{

    constructor(props){
        super(props);
        this.state = {
            reverted: false
        }
    
    }
    render(){

        return(
            <div>
                <img width="100%" src={logo} alt=''/>  
            </div>
        )
    }

}

export default Home