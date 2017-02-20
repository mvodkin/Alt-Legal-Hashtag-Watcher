import { connect } from 'react-redux';
import Body from './header';

const mapStateToProps = ({user}) => ({
  user: user
})

// const mapDispatchToProps = (dispatch) => ({
//   logout: () => dispatch(logout())
// });

export default connect(
  mapStateToProps,
  // mapDispatchToProps
)(Header);
