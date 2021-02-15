import React from 'react'
import { Accordion, Button, Col, Container, Row } from 'react-bootstrap'
import Player from './Player'

import '../css/Game.css'
import sortPlayers from '../helpers/sortPlayers'

class Game extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      round: 1,
      players: props.players.map((playerName) => {
        return {
          name: playerName,
          color: `rgb(${Math.floor(255 * Math.random())}, ${Math.floor(255 * Math.random())}, ${Math.floor(255 * Math.random())})`,
          score: 0,
          newScore: 0,
        }
      })
    }
    this.handleNewPlayerScore = this.handleNewPlayerScore.bind(this)
    this.handleNextRound = this.handleNextRound.bind(this)
    this.renderPlayer = this.renderPlayer.bind(this)
  }

  handleNewPlayerScore(event, index) {
    event.preventDefault()

    let players = this.state.players.slice()
    players[index].newScore = parseInt(event.target.value === "" ? 0 : event.target.value)

    this.setState({ players: players })
  }

  handleNextRound(event) {
    event.preventDefault()

    this.setState({
      round: this.state.round + 1,
      players: this.state.players.map((player) => {
        return {
          name: player.name,
          score: player.score + player.newScore,
          newScore: 0,
        }
      }).sort(sortPlayers)
    })
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
      </Container>
    )
  }
}

export default Game