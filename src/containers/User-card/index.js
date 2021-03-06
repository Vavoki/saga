import { connect } from 'react-redux'

import UserList from '../../components/User-card/index'
import {handleDelete,findUser} from "../../actions/actions";

const mapStateToProps = (state, ownProps) => {
  return {
    ownProps,
    user: state.userList.activeUser,
  }
}
const mapDispatchToProps = {
  findUser,
  handleDelete,
}

export default connect( mapStateToProps, mapDispatchToProps )(UserList)

