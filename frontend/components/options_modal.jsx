import React, { Component } from "react";

class OptionsModal extends Component {
  constructor(props) {
    super(props)

    this.state = {
      numberOfTweets: 5,
      contentFilter: "none"
    }
  }

  processForm() {
    this.props.fetchUpdateHashtag(
      this.state.contentFilter,
      this.state.numberOfTweets,
      this.props.hashtag.id
    )
  }

  componentDidMount() {
    this.setState({
      numberOfTweets: this.props.hashtag.number_of_tweets,
      contentFilter: this.props.hashtag.content_filter
    })
  }

  update(key) {
    return e => this.setState({[key]: e.target.value})
  }

  componentWillUnmount() {
    this.processForm()
  }

  render() {
    return (
      <form>
        <label>Number of Tweets
          <select
            onChange={this.update("numberOfTweets")}
            value={this.state.numberOfTweets}
            >
            <option value="5">5</option>
            <option value="10">10</option>
            <option value="15">15</option>
          </select>
        </label>

        <label>Content Filter Level
          <label>None
            <input
              onChange={this.update("contentFilter")}
              type="radio"
              checked={this.state.contentFilter === "none"}
              value="none"
              ></input>
          </label>
          <label>Low
            <input
              onChange={this.update("contentFilter")}
              type="radio"
              checked={this.state.contentFilter === "low"}
              value="low"
              ></input>
          </label>
          <label>Medium
            <input
              onChange={this.update("contentFilter")}
              type="radio"
              checked={this.state.contentFilter === "med"}
              value="med"
              ></input>
          </label>
        </label>
      </form>

    )
  }
}

export default OptionsModal;
