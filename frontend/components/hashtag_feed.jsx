import React, {Component} from 'react';

class HashtagFeed extends Component {
  constructor(props) {
    super(props)

    this.handleDeleteHashtag = this.handleDeleteHashtag.bind(this);
    this.handleFetchTweets = this.handleFetchTweets.bind(this);
    this._loadTweets = this._loadTweets.bind(this);
  }

  componentDidMount() {
    this.handleFetchTweets()
    setInterval(this.handleFetchTweets, 60000)
  }

  handleFetchTweets() {
    this.props.fetchSearchTweets({
      id: this.props.user.id,
      hashtag: this.props.hashtag.text
    })
  }

  _returnTweetHTML(string) {
    return { __html: string }
  }

  _loadTweets() {
    const element = document.getElementById(this.props.hashtag.id);
    if (twttr.widgets) twttr.widgets.load(element);
  }

  renderTweets() {
    const tweets = this.props.tweets[this.props.hashtag.text];
    let tweetElements;

    if (tweets && tweets.isFetching) {
      tweetElements = <div className="feed-spinner"></div>
    } else if (tweets && tweets.items) {
      tweetElements = tweets.items.map((tweet, idx) => (
        <li
          key={idx}
          dangerouslySetInnerHTML={this._returnTweetHTML(JSON.parse(tweet).html)}
          >
        </li>
      ));
    }

    setTimeout(this._loadTweets, 50)

    return tweetElements;

  }

  handleDeleteHashtag() {
    this.props.fetchDeleteHashtag(this.props.hashtag.id)
  }

  render() {
    const {text, id} = this.props.hashtag
    return (
      <section>
        <div className="watchlist-header">
          <h3>#{text}</h3>
          <div className="watchlist-options">
            <div className="options"></div>
            <div className="refresh" onClick={this.handleFetchTweets}></div>
            <div className="delete" onClick={this.handleDeleteHashtag}></div>
          </div>
        </div>
        <ul id={id} className="watchlist-feed">
          {this.renderTweets()}
        </ul>
      </section>
    );
  }

}

export default HashtagFeed;
