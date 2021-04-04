import React, { Component } from "react";
import PostService from "../service";
import { Link } from "react-router-dom";


export default class Post extends Component {
  constructor(props) {
    super(props);

    this.state = {
      post: null,
      loading: true,
    };
  }
  deletePost(id) {
    PostService.delete(id).then(() => {
      window.location= '/';
    });
  }
  componentDidMount() {
    PostService.get(this.props.match.params.id).then((res) => {
      if (res.data) {
        this.setState({
          post: res.data,
          loading: false,
        });
      } else {
        this.setState({
          loading: false,
          post: null,
        });
      }
    });
  }

  render() {
    const { post, loading } = this.state;
    if (loading) {
      return <div>Loading</div>;
    }
    if (!post) {
      return <div>Error</div>;
    }
    return (
      <div className="card">
        <div className="card-body">
            <h5 className="card-title">{post.title}</h5>
          <p className="card-text">{post.description}</p>
          <p className="blockquote-footer ">{post.author}</p>
          <div className="row">
            <Link to={"/update/" + post.id} className="btn btn-info ml-auto">
              Edit
            </Link>
            <button
              className="btn btn-danger ml-2 mr-2"
              onClick={() => {
                this.deletePost(post.id);
              }}
            >
              Delete{" "}
            </button>
          </div>
        </div>
      </div>
    );
  }
}
