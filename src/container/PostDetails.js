import React,{Component} from "react";
import { Link } from "react-router-dom";

class PostDetails extends Component{
    render(){
        return(
            <div>
                <h1>Post details</h1>
                <Link to= "/login">
                Go to login page
                </Link>
            </div>
        )
    }
}

export default PostDetails;