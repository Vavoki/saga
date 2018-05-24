import { connect } from 'react-redux'
import EditForm from '../../components/editForm/index'
import {findUser, handleUpdate} from "../../actions/actions";

const mapStateToProps = (state, ownProps) => {
  console.log("STATE:", state)
  return {
    ownProps,
    user: state.userList.activeUser,
  }
}
const mapDispatchToProps = {
  findUser,
  handleUpdate,
}

export default connect(mapStateToProps,mapDispatchToProps)(EditForm)
