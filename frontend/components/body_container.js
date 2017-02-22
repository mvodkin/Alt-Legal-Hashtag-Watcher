import { connect } from 'react-redux';
import Body from './body';
import {fetchAddHashtag, fetchDeleteHashtag} from '../actions/actions';

const mapStateToProps = ({user}) => ({
  user: user
})

const mapDispatchToProps = (dispatch) => ({
  fetchAddHashtag: (text, userId) => dispatch(fetchAddHashtag(text, userId)),
  fetchDeleteHashtag: (hashtagId) => dispatch(fetchDeleteHashtag(hashtagId))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Body);
