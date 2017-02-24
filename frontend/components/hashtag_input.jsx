import React, {Component} from "react";

export default class HashtagInput extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hashtag: "",
      valid: true
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.validateHashtag = this.validateHashtag.bind(this);
  }

  handleChange() {
    return e => {
      this.setState({ hashtag: e.currentTarget.value })
      setTimeout(this.validateHashtag, 20)
    }
  }

  handleSubmit(e) {
    e.preventDefault()
    if (this.state.valid) {
      const userId = this.props.user.id;
      const text = this.state.hashtag;
      this.props.fetchAddHashtag(text, userId);
      this.setState({hashtag: ""});
    }
  }

  validateHashtag() {

    const ranges = [
     '\ud83c[\udf00-\udfff]',
     '\ud83d[\udc00-\ude4f]',
     '\ud83d[\ude80-\udeff]'
    ];

    if (this.state.hashtag.includes(" ")) {
      this.setState({valid: false})
      return;
    }

    if (this.state.hashtag.match(ranges.join("|"))) {
      this.setState({valid: false})
      return;
    }

    if (this.state.hashtag.length === 0) {
      this.setState({valid: false})
      return;
    }

    this.setState({valid: true})

  }

  invalidStyle() {
    if (!this.state.valid) {
      return {
        borderColor: "#BE1413"
      }
    }
  }

  renderWarning() {
    if (!this.state.valid) {
      return (
        <div>
          <div className="input-warning">Cannot contain spaces or Emojis</div>
          <div className="input-warning">and cannot be blank</div>
        </div>
      )
    }
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input
          style={this.invalidStyle()}
          className="hashtag-input"
          type="text"
          placeholder="Add a hashtag"
          onChange={this.handleChange()}
          value={this.state.hashtag}
          ></input>
        {this.renderWarning()}
      </form>
    );
  }
}
