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
            <div className="user-card">
                <img src={this.props.avatar_url} alt="avatar" />
                <h2>Name: {this.props.name}</h2>
                <h3>Location: {this.props.location}</h3>
                <h4>Contact: @monikakhanka</h4>
                <h3>{this.state.count}</h3>
            </div>
        )
    }
}

export default UserClass;