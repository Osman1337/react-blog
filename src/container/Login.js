import React,{ Component } from "react";
import {Link} from "react-router-dom";


class Login extends Component{
    render(){
        return(
            <div>
                <h1>Login to your account</h1>
                { <Link to= "/">Go to Home page</Link> }
            </div>
        )
    }
}

export default Login;