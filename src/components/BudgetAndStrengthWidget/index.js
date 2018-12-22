import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { getSelectedPlayersList } from '../../selectors/index'
import LableValue from './../LableValue'

const getTeamBudgetsAndStrengths = players => {
  const totalBudget = 1000000
  const budgetUsed = players.reduce(
    (accumulator, player) => accumulator + player.value,
    0
  )
  const totalStrength = players.reduce((accumulator, player) => {
    return (
      accumulator +
      (100 - player.batting + (100 - player.bowling) + (100 - player.allRound))
    )
  }, 0)
  const averageStrength = players.length
    ? totalStrength / (players.length * 3)
    : 0
  const availableBudget = totalBudget - used
  return {
    used,
    totalBudget,
    budgetUsed,
    totalStrength,
    averageStrength,
    availableBudget
  }
}

export class BudgetAndStrengthWidget extends React.Component {
  render() {
    const { players } = this.props

    const {
      used,
      totalBudget,
      budgetUsed,
      averageStrength,
      availableBudget
    } = getTeamBudgetsAndStrengths(players)
    return (
      <div className="budget-strength-widget">
        <div className="title">Budget</div>
        <div className="budget-strength">
          <LableValue
            lable={'Total Budget'}
            value={totalBudget.toLocaleString('en-IN')}
          />
          <LableValue
            lable={'Used'}
            value={budgetUsed.toLocaleString('en-IN')}
          />
          <LableValue
            lable={'Available'}
            value={availableBudget.toLocaleString('en-IN')}
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
