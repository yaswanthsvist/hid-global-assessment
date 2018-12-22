export const getPlayersData = state => state.data.data
export const getSelectedPlayersList = state => {
  const { players, columns } = state.data.data
  return columns['selected-players'].playerIds.map(id => players[id])
}
