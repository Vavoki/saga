import { connect } from 'react-redux'

import Modal from '../../components/modal/index'
import { toggleModal, handleSubmit } from '../../actions/actions'
const mapStateToProps = state => {
  return {
    show: state.userList.show
  }
}

const mapDispatchToProps = {
  toggleModal,
  handleSubmit,
}
export default connect(mapStateToProps, mapDispatchToProps)(Modal)
