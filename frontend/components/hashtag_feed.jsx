import React, {Component} from 'react';

class HashtagFeed extends Component {
  constructor(props) {
    super(props)
  }

  componentDidMount() {
    const element = document.getElementById(this.props.id)
    element.innerHTML = "\u003Cblockquote class=\"twitter-tweet\"\u003E\u003Cp\u003EWhy I joined Twitter - Andy Piper \u003Ca href=\"https:\/\/twitter.com\/andypiper\"\u003E@andypiper\u003C\/a\u003E, Developer Advocate \u003Ca href=\"https:\/\/t.co\/fQ796U9lq1\"\u003Ehttps:\/\/t.co\/fQ796U9lq1\u003C\/a\u003E\u003C\/p\u003E— TwitterDev (@TwitterDev) \u003Ca href=\"https:\/\/twitter.com\/TwitterDev\/statuses\/482281320232415232\"\u003EJune 26, 2014\u003C\/a\u003E\u003C\/blockquote\u003E\n\u003Cscript async src=\"\/\/platform.twitter.com\/widgets.js\" charset=\"utf-8\"\u003E\u003C\/script\u003E"
  }

  render() {
    const {hashtag, id} = this.props
    return (
      <section>
        <div>
          <h3>{hashtag}</h3>
          <div id={id}></div>
        </div>
      </section>
    );
  }

}

export default HashtagFeed;
