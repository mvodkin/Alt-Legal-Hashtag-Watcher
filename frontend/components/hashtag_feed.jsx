import React, {Component} from 'react';

class HashtagFeed extends Component {
  constructor(props) {
    super(props)

    this.handleDeleteHashtag = this.handleDeleteHashtag.bind(this);
  }

  componentDidMount() {

    this.props.fetchSearchTweets({
      id: this.props.user.id,
      hashtag: this.props.hashtag.text
    })
  }

  returnTweetHTML(string) {
    return { __html: string }
  }

  renderTweets() {
    const tweets = this.props.tweets[this.props.hashtag.text];

    let tweetElements;
    if (tweets) {
      tweetElements = tweets.map((tweet, idx) => (
        <li
          key={idx}
          dangerouslySetInnerHTML={this.returnTweetHTML(JSON.parse(tweet).html)}
          >
        </li>
      ));
    }

    setTimeout(() => {
      const element = document.getElementById(this.props.hashtag.id);
      if (twttr.widgets) twttr.widgets.load(element);
    }, 50)

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
            <div className="refresh"></div>
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
