import { connect } from 'react-redux';
import Header from './header';
import { fetchLogout } from '../actions/actions';

const mapStateToProps = ({user}) => ({
  user: user
})

const mapDispatchToProps = (dispatch) => ({
  logout: (userId) => dispatch(fetchLogout(userId))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Header);
