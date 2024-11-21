import React from "react";

class UserClass extends React.Component {

    constructor(props){
        super(props);
        
        this.state = {
        };

    }

    componentDidMount(){
    }

    render(){
        return (
            <div className="user-card font-serif text-lg flex justify-center">
            <div>
                <img src={this.props.avatar_url} alt="avatar" className="w-52 h-40 m-auto rounded-lg my-4"/>
                <h2 className="text-lg">Developed by: {this.props.name}</h2>
                <h3>Location: {this.props.location}</h3>
                <h4>Contact me: monikakhanka@gmail.com</h4>
            </div>
        </div>
        )
    }
}

export default UserClass;