import { Link } from "react-router-dom";
import React, { Component } from "react";

export default class PostItem extends Component {
  render() {
    const props = this.props
    const post = props.post
    return (
      <div className="card">
        <div className="card-body">
          <Link
            to={`/${post.id}`}
          >
            <h5 className="card-title">{post.title}</h5>
          </Link>
          <p className="card-text">{post.description.substring(0, 255)} {post.description.length>256?<span style={{color: '#a1a1a1'}}>....Read More</span>:""}</p>
          <p className="blockquote-footer" style={{fontSize:18}}>{post.author}</p>
          <div className="row">
            <Link
              to={"/update/" + post.id}
              className="btn btn-info ml-auto"
            >
              Edit
            </Link>
            <button
              className="btn btn-danger ml-2 mr-2"
              onClick={() => {
                props.deletePost(post.id);
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
