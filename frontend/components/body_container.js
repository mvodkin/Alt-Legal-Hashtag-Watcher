import { connect } from 'react-redux';
import Body from './body';
import { fetchSearchTweets } from "../actions/twitter_api_actions";
import {
  fetchAddHashtag,
  fetchDeleteHashtag,
  fetchUpdateHashtag
} from '../actions/actions';

const mapStateToProps = ({user, tweets}) => ({
  user,
  tweets
})

const mapDispatchToProps = (dispatch) => ({
  fetchAddHashtag: (text, userId) => dispatch(fetchAddHashtag(text, userId)),
  fetchDeleteHashtag: (hashtagId) => dispatch(fetchDeleteHashtag(hashtagId)),
  fetchSearchTweets: (params) => dispatch(fetchSearchTweets(params)),
  fetchUpdateHashtag: (contentFilter, numberOfTweets, hashtagId) => (
    dispatch(fetchUpdateHashtag(contentFilter, numberOfTweets, hashtagId))
  )
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Body);
