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
    if (this.state.contentFilter !== this.props.hashtag.content_filter ||
      this.state.numberOfTweets !== this.props.hashtag.number_of_tweets) {
        this.props.fetchUpdateHashtag(
          this.state.contentFilter,
          this.state.numberOfTweets,
          this.props.hashtag.id
        )
      }
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
      <form className="options-modal-content">
        <h2>Options</h2>
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

          <div>
            <label>None</label>
            <input
              onChange={this.update("contentFilter")}
              type="radio"
              checked={this.state.contentFilter === "none"}
              value="none"
              ></input>
          </div>

          <div>
            <label>Low</label>
            <input
              onChange={this.update("contentFilter")}
              type="radio"
              checked={this.state.contentFilter === "low"}
              value="low"
              ></input>
          </div>

          <div>
            <label>Medium</label>
            <input
              onChange={this.update("contentFilter")}
              type="radio"
              checked={this.state.contentFilter === "med"}
              value="med"
              ></input>
          </div>

        </label>
      </form>

    )
  }
}

export default OptionsModal;
