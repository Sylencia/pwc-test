import { connect } from 'react-redux'
import { setSortOrder, setShowCompleted } from '../actions'
import { Filter } from '../components/Filter'

const mapStateToProps = state => ({
  sortOrder: state.filters.sortOrder,
  showCompleted: state.filters.showCompleted,
})

const mapDispatchToProps = dispatch => ({
  setSortOrder: order => dispatch(setSortOrder(order)),
  setShowCompleted: show => dispatch(setShowCompleted(show)),
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Filter)
