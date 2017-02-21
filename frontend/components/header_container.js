import { connect } from 'react-redux';
import Header from './header';
import { fetchLogout } from '../actions/actions';

const mapStateToProps = ({user}) => ({
  user: user
})

const mapDispatchToProps = (dispatch) => ({
  logout: () => dispatch(fetchLogout)
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Header);
