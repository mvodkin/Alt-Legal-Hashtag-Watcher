import React, {Component} from 'react';
import Modal from 'react-modal';
import OptionsModal from './options_modal';

class HashtagFeed extends Component {
  constructor(props) {
    super(props)

    this.state = { modalOpen: false }

    this.handleDeleteHashtag = this.handleDeleteHashtag.bind(this);
    this.handleFetchTweets = this.handleFetchTweets.bind(this);
    this._loadTweets = this._loadTweets.bind(this);
    this.openModal = this.openModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
  }

  componentDidMount() {
    this.handleFetchTweets()
    setInterval(this.handleFetchTweets, 100000)
  }

  handleFetchTweets() {
    this.props.fetchSearchTweets({
      id: this.props.user.id,
      hashtag: this.props.hashtag.text,
      number_of_tweets: this.props.hashtag.number_of_tweets,
      content_filter: this.props.hashtag.content_filter
    })
  }

  _returnTweetHTML(string) {
    return { __html: string }
  }

  _loadTweets() {
    const element = document.getElementById(this.props.hashtag.id);
    if (twttr.widgets) twttr.widgets.load(element);
  }

  openModal() {
    this.setState({ modalOpen: true })
  }

  closeModal() {
    this.setState({ modalOpen: false })
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

    const modalStyle = {
      content: {
        top: "10%",
        right: "20%",
        left: "20%",
        bottom: "20%"
      }
    }

    return (
      <section>
        <Modal
          className="options-modal"
          onRequestClose={this.closeModal}
          isOpen={this.state.modalOpen}
          contentLabel="Options modal"
          >
          <OptionsModal {...this.props}/>
        </Modal>
        <div className="watchlist-header">
          <h3>#{text}</h3>
          <div className="watchlist-options">
            <div className="options" onClick={this.openModal}></div>
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
