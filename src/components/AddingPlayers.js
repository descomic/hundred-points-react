import React from 'react'
import { Button, Form } from 'react-bootstrap'
import { LinkContainer } from 'react-router-bootstrap'
import PlayerList from './PlayerList'

class AddingPlayers extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      players: props.players,
      newPlayerName: '',
    }
    this.parentHandleAddPlayer = props.parentHandleAddPlayer
    this.handleNameChange = this.handleNameChange.bind(this)
    this.handleAddPlayer = this.handleAddPlayer.bind(this)
  }

  handleNameChange(event) {
    this.setState({
      players: this.state.players,
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
      <div>
        <PlayerList players={this.state.players} />
        <Form className='Add' onSubmit={this.handleAddPlayer}>
          <Form.Label>Add Player: </Form.Label>
          <Form.Control value={this.state.newPlayerName} onChange={this.handleNameChange}></Form.Control>
          <Button type='submit'>Add</Button>
        </Form>

        <LinkContainer exact to="/game">
          <Button>Play</Button>
        </LinkContainer>
      </div>
    )
  }
}

export default AddingPlayers