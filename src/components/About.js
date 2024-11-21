import User from "./User";
import UserClass from "./UserClass";
import React from "react";
class About extends React.Component{
    constructor(props){
        super(props);
        
    this.state = {
        userInfo : {
            name: "Dummy",
            location: "Default",
            avatar_url: "http://dummy-photo"
        },
    };
    }


    async componentDidMount(){
        const data = await fetch("https://api.github.com/users/monikakhanka");
        const json = await data.json();
 
        this.setState({userInfo : json,});
        

    }
    
    


    render(){
        const {name, location, avatar_url} = this.state.userInfo;
        return (<div className="about-us">
            <h1>About</h1>
            <h1>Welcome to my About us Page</h1>
            <UserClass name={name} location={location} avatar_url={avatar_url}/>
            </div>
        )
    }
}

export default About;