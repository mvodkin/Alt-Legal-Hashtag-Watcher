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

  const renderIfLoggedIn = () => {
    if (props.user.id) {
      return (
        <div>
          {renderHashtagFeeds()}
          {renderHashtagInput()}
        </div>
      )
    }
  }

  return (
    <main>
      {renderIfLoggedIn()}
    </main>
  )
}

export default Body;
