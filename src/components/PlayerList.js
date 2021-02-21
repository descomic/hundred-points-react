import React from 'react'
import { Button, Col, ListGroup, Row } from 'react-bootstrap'

function PlayerList({ players, handleDeletePlayer }) {
  let listOfPlayers = players.map((player) => {
    return (
      <ListGroup.Item key={player}>
        <Row>
          <Col sm={10} xs={10}>
            <span>{player}</span>
          </Col>
          <Col sm={1} xs={1}>
            <Button size="sm" variant="light" onClick={(event) => handleDeletePlayer(event, player)}>X</Button>
          </Col>
        </Row>
      </ListGroup.Item>
    );
  });

  return (
    <ListGroup variant="flush">{listOfPlayers}</ListGroup>
  )
}

export default PlayerList