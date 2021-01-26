import React from 'react'
import { ListGroup } from 'react-bootstrap'

function PlayerList({ players }) {
  let listOfPlayers = players.map((player) => {
    return (
      <ListGroup.Item key={player}>{player}</ListGroup.Item>
    );
  });

  return (
    <ListGroup variant="flush">{listOfPlayers}</ListGroup>
  )
}

export default PlayerList