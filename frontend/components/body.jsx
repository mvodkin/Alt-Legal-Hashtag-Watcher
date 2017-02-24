import React from "react";
import HashtagInput from "./hashtag_input";
import HashtagFeed from "./hashtag_feed";

const Body = (props) => {

  const renderHashtagFeeds = () => (
    props.user.hashtags.map((hashtag, idx) => <HashtagFeed key={idx} {...props} hashtag={hashtag}/>)
  );

  return (
    <main>
      {renderHashtagFeeds()}
      <HashtagInput {...props}/>
    </main>
  )
}

export default Body;
