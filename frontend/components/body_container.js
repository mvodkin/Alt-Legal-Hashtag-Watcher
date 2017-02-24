import { connect } from 'react-redux';
import Body from './body';
import { fetchSearchTweets } from "../actions/twitter_api_actions";
import {
  fetchAddHashtag,
  fetchDeleteHashtag,
} from '../actions/actions';

const mapStateToProps = ({user, tweets}) => ({
  user,
  tweets
})

const mapDispatchToProps = (dispatch) => ({
  fetchAddHashtag: (text, userId) => dispatch(fetchAddHashtag(text, userId)),
  fetchDeleteHashtag: (hashtagId) => dispatch(fetchDeleteHashtag(hashtagId)),
  fetchSearchTweets: (params) => dispatch(fetchSearchTweets(params))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Body);
