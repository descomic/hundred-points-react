import React from 'react'
import { Accordion, Button, Col, Container, Row } from 'react-bootstrap'
import Player from './Player'

import '../css/Game.css'

class Game extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      round: 1,
      players: props.players.map((playerName) => {
        return {
          name: playerName,
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
    console.log(event)

    let newState = this.state
    newState.players[index].newScore = parseInt(event.target.value)

    this.setState(newState)

    event.preventDefault()
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
      })
    })
  }

  renderPlayer(player, index) {
    return (
      <Player
        key={index}
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
    players.sort((a, b) => b.score - a.score)

    return (
      <Container className="game-container">
        <Row className="game-header">
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
        <Row noGutters>
          <Col sm="2">
            <Accordion>
              {players}
            </Accordion>
          </Col>
        </Row>
      </Container>
    )
  }
}

export default Game