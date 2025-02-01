import { useState } from "react";

const User =(props)=>{
    const[count]=useState(0);
    const[count2]=useState(2);

    const{name,location,contact}=props;
    return(
        <div className="user-card">
            <p>Count:{count}</p>
            <p>Count2:{count2}</p>
            <h2>Name:{name}</h2>
            <h3>location:{location}</h3>
            <h4>Contact:@{contact}</h4>
        </div>
    )
}

export default User;