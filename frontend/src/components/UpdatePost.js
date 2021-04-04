import React, { Component } from "react";
import PostService from "../service";

export default class UpdatePost extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      description: "",
      author: "",
    };
  }
  componentDidMount() {
    PostService.get(this.props.match.params.id).then((res) => {
      if (res.data) {
        this.setState({
          title: res.data.title,
          description: res.data.description,
          author: res.data.author,
        });
      } else {
        this.setState({
          title: "",
          description: "",
          author: "",
        });
      }
    });
  }
  onChangeTitle = (e) => {
    this.setState({
      title: e.target.value,
    });
  };
  onChangeDescription = (e) => {
    this.setState({
      description: e.target.value,
    });
  };
  onChangeAuthor = (e) => {
    this.setState({
      author: e.target.value,
    });
  };
  onSubmit = (e) => {
    e.preventDefault();

    const post = {
      title: this.state.title,
      description: this.state.description,
      author: this.state.author,
    };
    PostService.update(this.props.match.params.id, post).then((res) => {
      console.log(this.props);
      this.props.history.push(`/${this.props.match.params.id}`);
    });
  };

  render() {
    return (
      <div className="container">
        <h2>Edit Post</h2>
        <form onSubmit={this.onSubmit}>
          <div className="from-group">
            <label htmlFor="title">Title</label>
            <input
              type="text"
              className="form-control"
              value={this.state.title}
              onChange={this.onChangeTitle}
            />
          </div>
          <div className="from-group">
            <label htmlFor="description">Description</label>
            <textarea
              className="form-control"
              rows="5"
              value={this.state.description}
              onChange={this.onChangeDescription}
            />
          </div>
          <div className="from-group">
            <label htmlFor="author">Author</label>
            <input
              type="text"
              className="form-control"
              value={this.state.author}
              onChange={this.onChangeAuthor}
            />
          </div>
          <br />
          <div className="from-group">
            <input
              type="submit"
              value="UPDATE"
              className="btn btn-primary float-right"
            />
          </div>
        </form>
      </div>
    );
  }
}
