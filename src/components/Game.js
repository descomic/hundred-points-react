import React from 'react'
import { Accordion, Button, Col, Container, Row } from 'react-bootstrap'
import Player from './Player'

import '../css/Game.css'
import sortPlayers from '../helpers/sortPlayers'
import { Line } from 'react-chartjs-2'

class Game extends React.Component {
  constructor(props) {
    super(props)

    let players = props.players.slice().map((playerName) => {
      return {
        name: playerName,
        color: `rgba(${Math.floor(255 * Math.random())}, ${Math.floor(255 * Math.random())}, ${Math.floor(255 * Math.random())}, 1)`,
        score: 0,
        newScore: 0,
      }
    })

    this.state = {
      round: 1,
      players: players,
      history: players.map((player) => {
        let value = {}
        Object.assign(value, player)
        value.score = []
        delete value.newScore
        return value
      }),
      chartData: { data: { labels: [], datasets: [] } }
    }

    this.handleNewPlayerScore = this.handleNewPlayerScore.bind(this)
    this.handleNextRound = this.handleNextRound.bind(this)
    this.renderPlayer = this.renderPlayer.bind(this)
    this.updateHistory = this.updateHistory.bind(this)
    this.updateChartData = this.updateChartData.bind(this)
  }

  handleNewPlayerScore(event, index) {
    event.preventDefault()

    let players = this.state.players.slice()
    players[index].newScore = parseInt(event.target.value === "" ? 0 : event.target.value)

    this.setState({ players: players })
  }

  handleNextRound(event) {
    event.preventDefault()

    let players = this.state.players.map((player) => {
      return {
        name: player.name,
        score: player.score + player.newScore,
        newScore: 0,
      }
    }).sort(sortPlayers)
    let history = this.updateHistory(players)

    this.setState({
      round: this.state.round + 1,
      players: players,
      history: history,
      chartData: this.updateChartData(this.state.round + 1, history)
    })
  }

  /**
   * Updates this.state.history
   */
  updateHistory(players) {
    let history = this.state.history

    history.forEach((player) => {
      player.score.push(players.find(x => x.name === player.name).score)
    })

    return history
  }

  /**
   * Updates the datasets and label of the chart
   */
  updateChartData(round, history) {
    let chartData = {
      labels: Array(round).fill().map((x, i) => i + 1),
      datasets: history.map(player => {
        return {
          label: player.name,
          fill: false,
          backgroundColor: player.color,
          borderColor: player.color,
          borderWidth: 2,
          data: player.score
        }
      }),
    }

    return chartData
  }

  renderPlayer(player, index) {
    return (
      <Player
        key={player.score + player.name}
        index={index}
        name={player.name}
        score={player.score}
        newScore={player.newScore}
        handleNewPlayerScore={this.handleNewPlayerScore}
      />
    )
  }

  render() {
    let players = this.state.players.map(this.renderPlayer)

    return (
      <Container>
        <Row className="game-header mt-3">
          <Col>
            <h2>Round {this.state.round}</h2>
          </Col>
          <Col>
            <Button
              as="input"
              type="button"
              className="next-round-button"
              value="Next round"
              onClick={this.handleNextRound}
            />
          </Col>
        </Row>
        <Row noGutters className="mt-4">
          <Col>
            <Row className="m-auto">
              <Col className="m-auto"><h3>Name</h3></Col>
              <Col className="m-auto"><h3>Score</h3></Col>
              <Col className="m-auto"><h3>Next score</h3></Col>
            </Row>
            <Row>
              <Col>
                <Accordion>
                  {players}
                </Accordion>
              </Col>
            </Row>
          </Col>
        </Row>

        <Row className="mt-5">
          <Col>
            <Line
              data={this.state.chartData}
              options={{
                title: {
                  display: true,
                  text: 'Evolution of the score',
                  fontSize: 20
                },
                legend: {
                  display: true,
                  position: 'right'
                }
              }}
            />
          </Col>
        </Row>
      </Container>
    )
  }
}

export default Game