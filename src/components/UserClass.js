import React from "react"

class UserClass extends React.Component{
    constructor(props){
        super(props);
        
        this.state={}
    }

    componentDidMount(){
        
    }
    render(){
        const{name,location,contact}=this.props;
        return(
            <div className="user-card">
                <h1>Name:{name}</h1>
                <h4>location:{location}</h4>
                <h4>Contact:@{contact}</h4>
            </div>
        )
    }
}

export default UserClass;