import React from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { getPlayersData } from '../../selectors/index'
import { getData, updatePlayersList } from '../../actions/index'
import PlayerList from '../../components/PlayerList'
import { DragDropContext } from 'react-beautiful-dnd'
import BudgetAndStrengthWidget from './../../components/BudgetAndStrengthWidget'

const removePlayerInListAtIndexWithId = (players, index) => {
  players.splice(index, 1)
  return players
}
const addPlayerInListAtIndexWithId = (players, index, addItem) => {
  players.splice(index, 0, addItem)
  return [...players]
}

const getPlayers = (data, type) =>
  (data.columns &&
    data.columns[type] &&
    Array.isArray(data.columns[type].playerIds) &&
    data.columns[type].playerIds.map(id => data.players[id])) ||
  []

class SelectPlayer extends React.Component {
  onDragEnd = result => {
    const { destination, source, draggableId } = result
    if (!destination) return
    const { data } = this.props
    let availablePlayers = [...data.columns['available-players'].playerIds]
    let selectedPlayers = [...data.columns['selected-players'].playerIds]
    //if player dragged from available list to selected list
    if (
      destination.droppableId === 'selected-players' &&
      source.droppableId === 'available-players'
    ) {
      let updatedAvailablePlayers = removePlayerInListAtIndexWithId(
        availablePlayers,
        source.index
      )
      let updatedSelectedPlayers = addPlayerInListAtIndexWithId(
        selectedPlayers,
        destination.index,
        draggableId
      )
      this.props.updatePlayersList(
        updatedAvailablePlayers,
        updatedSelectedPlayers
      )
    }
    //if player dragged from selected list to available list
    if (
      destination.droppableId === 'available-players' &&
      source.droppableId === 'selected-players'
    ) {
      let updatedSelectedPlayers = removePlayerInListAtIndexWithId(
        selectedPlayers,
        source.index
      )
      let updatedAvailablePlayers = addPlayerInListAtIndexWithId(
        availablePlayers,
        destination.index,
        draggableId
      )
      this.props.updatePlayersList(
        updatedAvailablePlayers,
        updatedSelectedPlayers
      )
    }
  }
  componentDidMount = () => {
    this.props.getData()
  }
  render() {
    const data = this.props.data
    if (!data) {
      return null
    }
    let availablePlayers = getPlayers(data, 'available-players')
    let selectedPlayers = getPlayers(data, 'selected-players')
    return (
      <div className="page">
        <div className="header">IPL Online Team Selection</div>
        <div className="container">
          <DragDropContext onDragEnd={this.onDragEnd}>
            {data && (
              <PlayerList
                players={availablePlayers}
                {...data.columns['available-players']}
              />
            )}
            {data && (
              <PlayerList
                players={selectedPlayers}
                {...data.columns['selected-players']}
              />
            )}
            <BudgetAndStrengthWidget />
          </DragDropContext>
        </div>
        <div className="footer" />
      </div>
    )
  }
}
const mapStateToProps = state => ({
  data: getPlayersData(state)
})
const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      getData,
      updatePlayersList
    },
    dispatch
  )
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SelectPlayer)
