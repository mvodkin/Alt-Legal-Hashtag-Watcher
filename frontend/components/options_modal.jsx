import React, { Component } from "react";

class OptionsModal extends Component {
  constructor(props) {
    super(props)

    this.state = {
      numberOfTweets: 5,
      contentFilter: "",
      attitudeFilter: ""
    }

    this.handleFetchTweets = this.handleFetchTweets.bind(this);
  }

  processForm() {

    const { contentFilter, numberOfTweets, attitudeFilter} = this.state,
      {content_filter, number_of_tweets, attitude_filter, id } = this.props.hashtag;

    if (contentFilter !== content_filter ||
      numberOfTweets !== number_of_tweets ||
      attitudeFilter !== attitude_filter
    ) {
        this.props.fetchUpdateHashtag(
          contentFilter,
          numberOfTweets,
          attitudeFilter,
          id
        )

        this.handleFetchTweets()
    }
  }

  componentDidMount() {
    this.setState({
      numberOfTweets: this.props.hashtag.number_of_tweets,
      contentFilter: this.props.hashtag.content_filter,
      attitudeFilter: this.props.hashtag.attitude_filter
    })
  }

  handleFetchTweets() {
    this.props.fetchSearchTweets({
      id: this.props.user.id,
      hashtag: this.props.hashtag.text,
      number_of_tweets: this.state.numberOfTweets,
      content_filter: this.state.contentFilter,
      attitude_filter: this.state.attitudeFilter,
      last_tweet_id: 0
    });
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

        <label>Content Filter

          <div>
            <label>On</label>
            <input
              onChange={this.update("contentFilter")}
              type="radio"
              checked={this.state.contentFilter === "safe"}
              value="safe"
              ></input>
          </div>

          <div>
            <label>Off</label>
            <input
              onChange={this.update("contentFilter")}
              type="radio"
              checked={this.state.contentFilter === ""}
              value=""
              ></input>
          </div>

        </label>

        <label>Attitude Filter

          <div>
            <label>:)</label>
            <input
              onChange={this.update("attitudeFilter")}
              type="radio"
              checked={this.state.attitudeFilter === "positive"}
              value="positive"
              ></input>
          </div>

          <div>
            <label>:(</label>
            <input
              onChange={this.update("attitudeFilter")}
              type="radio"
              checked={this.state.attitudeFilter === "negative"}
              value="negative"
              ></input>
          </div>

          <div>
            <label>none</label>
            <input
              onChange={this.update("attitudeFilter")}
              type="radio"
              checked={this.state.attitudeFilter === ""}
              value=""
              ></input>
          </div>

        </label>
      </form>

    )
  }
}

export default OptionsModal;
