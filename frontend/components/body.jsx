import React from "react";
import HashtagInput from "./hashtag_input";
import HashtagFeed from "./hashtag_feed";

const Body = (props) => {

  const renderHashtagFeeds = () => (
    props.user.hashtags.map((hashtag, idx) => <HashtagFeed key={idx} {...props} hashtag={hashtag}/>)
  );

  const renderHashtagInput = () => {
    if (props.user.hashtags.length < 3) {
      return <HashtagInput {...props}/>
    }
  }

  return (
    <main>
      <div>
        {renderHashtagFeeds()}
        {renderHashtagInput()}
      </div>
    </main>
  )
}

export default Body;
