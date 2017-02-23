import React, {Component} from "react";

export default class HashtagInput extends Component {
  constructor(props) {
    super(props);
    this.state = { hashtag: "" };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange() {
    return e => this.setState({ hashtag: e.currentTarget.value })
  }

  handleSubmit(e) {
    e.preventDefault()
    const userId = this.props.user.id;
    const text = this.state.hashtag;
    this.props.fetchAddHashtag(text, userId);
    this.setState({hashtag: ""});
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input
          type="text"
          placeholder="Add a hashtag"
          onChange={this.handleChange()}
          value={this.state.hashtag}
          ></input>
      </form>
    );
  }
}
