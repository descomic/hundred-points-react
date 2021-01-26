import { Table } from 'react-bootstrap';
import Player from './Player';

function PlayerTable(props) {
  let listOfPlayers = props.players.list.map((player) => {
    return (
      <Player key={player.name} name={player.name} />
    );
  });

  let head = (
    <thead>
      <tr key='head'>
        <th key='name'>Name</th>
        <th key='score'>Score</th>
      </tr>
    </thead>
  )
  head = props.players.list.length > 0 ? head : null;

  return (
    <Table>
      {head}
      <tbody>
        {listOfPlayers}
      </tbody>
    </Table>
  );
}

export default PlayerTable;