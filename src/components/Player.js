import React from 'react';
import { Accordion, Card, Col, Container, Form, Row } from 'react-bootstrap';

function Player({ index, name, score, newScore, handleNewPlayerScore }) {
  return (
    <Card>
      <Accordion.Toggle as={Card.Header} eventKey={name}>
        <Container>
          <Row>
            <Col>{name}</Col>
            <Col>{score}</Col>
            <Col>{parseInt(score) + parseInt(newScore)}</Col>
          </Row>
        </Container>
      </Accordion.Toggle>
      <Accordion.Collapse eventKey={name}>
        <Card.Body>
          <Form>
            <Form.Group as={Row}>
              <Col>
                <Form.Label htmlFor={name} column>New Score</Form.Label>
              </Col>
              <Col>
                <Form.Control
                  id={name}
                  value={newScore}
                  onChange={(event) => handleNewPlayerScore(event, index)}
                  type="text"
                  pattern="[0-9]*"
                />
              </Col>
            </Form.Group>
          </Form>
        </Card.Body>
      </Accordion.Collapse>
    </Card>
  );
}

export default Player;