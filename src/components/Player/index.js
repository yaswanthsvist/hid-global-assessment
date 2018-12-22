import React from 'react'
import { Draggable } from 'react-beautiful-dnd'
import img from '../../images/playerIcon.png'

export default class Player extends React.Component {
  render() {
    return (
      <Draggable draggableId={this.props.player.id} index={this.props.index}>
        {(provided, snapshot) => (
          <div
            ref={provided.innerRef}
            {...provided.draggableProps}
            {...provided.dragHandleProps}
            className="player"
          >
            <img src={img} />
            <div className="player-details">
              <div className="detail">{this.props.player.name}</div>
              <div className="detail">
                Rs. {this.props.player.value.toLocaleString('en-IN')}
              </div>
            </div>
            <div className="player-details">
              <div className="detail">Batting</div>
              <div className="detail">Bowling</div>
              <div className="detail">All Round</div>
            </div>
            <div className="player-details">
              <div className="detail">Rank : {this.props.player.batting}</div>
              <div className="detail">Rank : {this.props.player.bowling}</div>
              <div className="detail">Rank : {this.props.player.allRound}</div>
            </div>
          </div>
        )}
      </Draggable>
    )
  }
}
