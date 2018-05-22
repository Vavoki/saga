import { connect } from 'react-redux'

import AddUserBtn from '../../components/button/index'
import { toggleModal } from '../../actions/actions'

const mapStateToProps = state => {
  return {
    show: state.userList.show
  }
}

const mapDispatchToProps = {
  toggleModal,

}

export default connect(mapStateToProps, mapDispatchToProps)(AddUserBtn)
