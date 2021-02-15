import React from 'react'
import { Button, Col, Container, Form, OverlayTrigger, Row, Tooltip } from 'react-bootstrap'
import { LinkContainer } from 'react-router-bootstrap'
import PlayerList from './PlayerList'

class AddingPlayers extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      players: props.players,
      newPlayerName: '',
      errorMessage: 'Empty name',
    }
    this.parentHandleAddPlayer = props.parentHandleAddPlayer
    this.verifyName = this.verifyName.bind(this)
    this.handleNameChange = this.handleNameChange.bind(this)
    this.handleAddPlayer = this.handleAddPlayer.bind(this)
  }

  /**
   * Returns true if the name is valid and false else.
   * 
   * @param {string} name 
   */
  verifyName(name) {
    if (name === '') {
      this.setState({ errorMessage: "Empty name" })
      return false
    }

    if (this.state.players.includes(name)) {
      this.setState({ errorMessage: "Duplicate name" })
      return false
    }

    this.setState({ errorMessage: "" })
    return true
  }

  handleNameChange(event) {
    this.setState({
      newPlayerName: event.target.value,
    })
    this.verifyName(event.target.value)
  }

  handleAddPlayer(event) {
    event.preventDefault()

    let newPlayersList = this.state.players.slice()
    let newPlayer = this.state.newPlayerName.slice()

    if (!this.verifyName(newPlayer)) {
      alert(this.state.errorMessage)

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
  }

  render() {
    const tooltip = (
      <Tooltip id="tooltip-add-button" show={this.state.errorMessage !== ""}>{this.state.errorMessage}</Tooltip>
    )

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
                  <OverlayTrigger
                    placement="top"
                    overlay={tooltip}
                  >
                    <Button
                      type='submit'
                      variant='secondary'
                      disabled={this.state.errorMessage !== ""}
                    >
                      Add
                  </Button>
                  </OverlayTrigger>
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