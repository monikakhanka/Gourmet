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
        return (
            <>
                <div className="flex justify-center font-serif">
                    <h1 className="text-2xl py-10 text-green-600">Thank you for your time!</h1>
                </div>    
                <div className="py-4">
                    <UserClass name={name} location={location} avatar_url={avatar_url}/>
                </div>
            </>
        )
    }
}

export default About;