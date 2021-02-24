import React, { Component } from "react";
import { Link } from "react-router-dom";

import axios from "axios";
import { JumboTron } from "../components/JumboTron";
import Spinner from "../components/Spinner";

class PostDetails extends Component {
  state = {
    loading: false,
    error: "",
    post: [],
  };

  componentDidMount() {
    this.setState({ loading: true });
    axios
      .get(
        `https://jsonplaceholder.typicode.com/posts/?id=${this.props.match.params.id}`
      )
      .then((response) =>
        this.setState({ loading: false, post: response.data })
      )
      .catch((error) => console.log(error));
  }

  render() {
    console.log(this.props);
    return (
      <div>
        <JumboTron />
        {this.state.loading && <Spinner />}
        <div className="post-details">
          {this.state.post.map((p) => {
            return (
              <div>
                <h1>{p.title}</h1>
                <p>{p.body}</p>
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}

export default PostDetails;
