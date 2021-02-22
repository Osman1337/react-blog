import React ,{Component} from "react";
import {Link} from "react-router-dom";
import axios from "axios";

class Home extends Component{
    render(){
        return(
            <div>
                <h1>Post List</h1>
                <Link to= "/details">Go to post details</Link>
                
            </div>
        )
    }
}

export default Home;
