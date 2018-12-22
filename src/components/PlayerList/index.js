import React from 'react'
import Player from './../Player'
import { Droppable } from 'react-beautiful-dnd'

export default class PlayerList extends React.Component {
  render() {
    const { players } = this.props
    return (
      <div className="player-list">
        <div className="title">{this.props.title}</div>
        <Droppable droppableId={this.props.id}>
          {provided => (
            <div
              ref={provided.innerRef}
              {...provided.droppableProps}
              className="player-group"
            >
              {players &&
                players.map((player, index) => (
                  <Player key={player.id} index={index} player={player} />
                ))}
              {provided.placeholder}
            </div>
          )}
        </Droppable>
      </div>
    )
  }
}
