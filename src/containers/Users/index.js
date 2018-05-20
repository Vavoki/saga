import { connect } from 'react-redux'

import UserList from '../../components/Users'
import { selectUsers } from '../../selectors'
import { getUsers } from '../../actions/actions'

const mapStateToProps = state => {
    return {
        users: selectUsers(state),
    }
}

const mapDispatchToProps = dispatch => {
    return {
        getUsers: () => dispatch(getUsers())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(UserList)
