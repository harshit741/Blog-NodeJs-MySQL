import React, { Component } from "react";
import PostService from "../service";
import PostItem from "./PostItem";

export class AllPosts extends Component {
  constructor(props) {
    super(props);
    this.state = {
      posts: [],
    };
  }
  componentDidMount() {
    PostService.getAll()
      .then((res) => {
        this.setState({
          posts: res.data,
        });
      })
      .catch((err) => {
        console.log(err);
      });
  }
  deletePost(id) {
    PostService.delete(id).then((res) => {
      window.location.reload();
    });
  }
  allPosts = () => {
    return this.state.posts.map((post) => {
      return (
        <PostItem post={post} deletePost={this.deletePost} key={post.id} />
      );
    });
  };
  render() {
    return <div className="container">{this.allPosts()}</div>;
  }
}

export default AllPosts;
