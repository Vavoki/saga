import { connect } from 'react-redux'

import UserList from '../../components/User-card/index'
import { selectUsers } from '../../selectors'
import { getUsers } from '../../actions/actions'

const mapStateToProps = (state) => {
  return {
    users:
  }
}

const mapDispatchToProps = dispatch => {
  return {
    getUsers: () => dispatch(getUsers())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(UserList)
