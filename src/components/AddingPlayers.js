import React from 'react'
import { Button, Col, Container, Form, Row } from 'react-bootstrap'
import { LinkContainer } from 'react-router-bootstrap'
import PlayerList from './PlayerList'

class AddingPlayers extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      players: props.players,
      newPlayerName: '',
      errorMessage: '',
    }
    this.parentHandleAddPlayer = props.parentHandleAddPlayer
    this.handleNameChange = this.handleNameChange.bind(this)
    this.handleAddPlayer = this.handleAddPlayer.bind(this)
  }

  handleNameChange(event) {
    this.setState({
      newPlayerName: event.target.value,
    })
  }

  handleAddPlayer(event) {
    let newPlayersList = this.state.players.slice()
    let newPlayer = this.state.newPlayerName.slice()

    if (newPlayer === '') {
      alert("Please enter a name")

    } else {

      if (this.state.players.includes(newPlayer)) {
        alert(`The player ${newPlayer} already exists.`)

      } else {
        newPlayersList.push(newPlayer)

        this.parentHandleAddPlayer(newPlayer)

        this.setState({
          players: newPlayersList,
          newPlayerName: '',
        })
      }
    }

    event.preventDefault()
  }

  render() {
    return (
      <Container>
        <Row className="mt-4">
          <Col>
            <h2>Preparing the game</h2>
          </Col>
        </Row>

        <Row className="mt-4" xs={1} lg={2}>
          <Col>
            <PlayerList players={this.state.players} />
          </Col>

          <Col>
            <Form className='mt-3 AddForm' onSubmit={this.handleAddPlayer}>
              <Row>
                <Col>
                  <Form.Label>Add Player: </Form.Label>
                </Col>
              </Row>

              <Row className='m-4'>
                <Col>
                  <Form.Control
                    value={this.state.newPlayerName}
                    onChange={this.handleNameChange}
                    placeholder={"Player's name"}
                  />

                </Col>
                <Col>
                  <Button type='submit' variant='secondary'>Add</Button>
                </Col>
              </Row>
            </Form>

            <Row>
              <Col>
                <LinkContainer to="/hundred-points-react/game">
                  <Button variant='primary' size='lg'>Play</Button>
                </LinkContainer>
              </Col>
            </Row>
          </Col>
        </Row>

      </Container>
    )
  }
}

export default AddingPlayers