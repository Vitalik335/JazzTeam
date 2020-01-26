import React, {Component} from 'react'
import PropTypes from 'prop-types';
import User from '../../user';
import './style.css'
class Profile extends Component{
    constructor(props){
        super(props);
        this.state = {
            reverted: false
        }

    }
    render(){
        return(
            <div>
                <h1>Hello {this.props.Name} </h1>


            </div>
        )
    }

}
Profile.propTypes = {
    name: PropTypes.string
};

export default Profile
