import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import AddingPlayers from './AddingPlayers'
import Game from './Game'
import Header from './Header'

// Importing style
import '../css/App.css'

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      players: []
    }

    this.addPlayer = this.addPlayer.bind(this)
  }

  addPlayer(playerName) {
    let newPlayersList = this.state.players.slice()
    
    newPlayersList.push(playerName)

    this.setState({
      players: newPlayersList
    })
  }

  render() {
    return (
      <div className="app">
        <Router>
          <Header />
          <Switch>
            <Route exact path="/">
              <AddingPlayers players={this.state.players} parentHandleAddPlayer={this.addPlayer} />
            </Route>
            <Route path="/game">
              <Game players={this.state.players.slice()} />
            </Route>
          </Switch>
        </Router>
      </div>
    )
  }
}

export default App;