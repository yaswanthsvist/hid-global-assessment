import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { getSelectedPlayersList } from '../../selectors/index'
import LableValue from './../LableValue'

export class BudgetAndStrengthWidget extends React.Component {
  render() {
    const { players } = this.props
    const totalBudget = 1000000
    const used = players.reduce(
      (accumulator, currentValue) => accumulator + currentValue.value,
      0
    )
    const totalStrength = players.reduce((accumulator, currentValue) => {
      return (
        accumulator +
        (100 -
          currentValue.batting +
          (100 - currentValue.bowling) +
          (100 - currentValue.allRound))
      )
    }, 0)
    const averageStrength = players.length
      ? totalStrength / (players.length * 3)
      : 0
    return (
      <div className="budget-strength-widget">
        <div className="title">Budget</div>
        <div className="budget-strength">
          <LableValue
            lable={'Total Budget'}
            value={totalBudget.toLocaleString('en-IN')}
          />
          <LableValue lable={'Used'} value={used.toLocaleString('en-IN')} />
          <LableValue
            lable={'Available'}
            value={(totalBudget - used).toLocaleString('en-IN')}
          />
          <LableValue
            lable={'Team Strength'}
            value={Number.parseFloat(averageStrength).toFixed(1)}
          />
        </div>
      </div>
    )
  }
}
const mapStateToProps = state => ({
  players: getSelectedPlayersList(state)
})
export default connect(mapStateToProps)(BudgetAndStrengthWidget)
