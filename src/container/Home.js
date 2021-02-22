import React ,{Component} from "react";
import {Link} from "react-router-dom";
import Spinner from "../components/Spinner";

import axios from "axios";
import { JumboTron } from "../components/JumboTron";

class Home extends Component{
    state={
        postList:[],
        loading: false,
        error:""
    }

    componentDidMount() {
        this.setState({loading:true})
        axios.get("https://jsonplaceholder.typicode.com/posts")
        .then(response=>this.setState({loading:false, postList:response.data}))
        .catch(error=>console.log(error))
    }

    render(){
        return(
            <div>
        <JumboTron/>
              {this.state.loading && <Spinner/>}
              <div className="content">
                {this.state.postList.map(post => {
                    return(
                        <ul key={post.id}>
                            <Link to={`/${post.id}`}>
                            <li >
                                {post.title}
                            </li>
                            </Link>
                        </ul>
                    )
                }) }
              </div>
            </div>
        )
    }
}

export default Home;
