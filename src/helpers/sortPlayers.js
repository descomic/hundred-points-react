/**
 * Sorting players in score order descending.
 * 
 * @param {player} a 
 * @param {player} b 
 */
export default function sortPlayers(a, b) {
  if (a.score > b.score) {
    return 1
  }

  if (a.score < b.score) {
    return -1
  }

  return 0
}