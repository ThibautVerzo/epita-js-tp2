import React from "react";
import Board from "../components/Board";
import GameInfo from "../components/GameInfo";

const gameLayoutStyle = {
  width: 650,
  height: `calc(90%)`,
  top: 0,
  bottom: 0,
  left: 0,
  right: 0,
  margin: "auto"
};

class GameLayout extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      cells: Array(9).fill(null),
      currentPlayer: "player 1",
      gameState: "In game"
    };
  }

  // getDerivedStateFromProps is called before every render,
  // use it to infer new state values from props or state changes.
  static getDerivedStateFromProps(props, state) {
    let cellsTmp = state.cells;
    
    if ((cellsTmp[0] !== null && (cellsTmp[0] === cellsTmp[3] && cellsTmp[3] === cellsTmp[6])) ||
            (cellsTmp[1] !== null && (cellsTmp[1] === cellsTmp[4] && cellsTmp[4] === cellsTmp[7])) ||
            (cellsTmp[2] !== null && (cellsTmp[2] === cellsTmp[5] && cellsTmp[5] === cellsTmp[8]))) {
        state.gameState = "Game Over";
    }
    else if ((cellsTmp[0] !== null && (cellsTmp[0] === cellsTmp[4] && cellsTmp[4] === cellsTmp[8])) ||
            (cellsTmp[2] !== null && (cellsTmp[2] === cellsTmp[4] && cellsTmp[4] === cellsTmp[6]))) {
      state.gameState = "Game Over"
    }
    else if ((cellsTmp[0] !== null && (cellsTmp[0] === cellsTmp[1] && cellsTmp[1] === cellsTmp[2])) ||
      (cellsTmp[3] !== null && (cellsTmp[3] === cellsTmp[4] && cellsTmp[4] === cellsTmp[5])) ||
      (cellsTmp[6] !== null && (cellsTmp[6] === cellsTmp[7] && cellsTmp[7] === cellsTmp[8]))) {
        state.gameState = "Game Over"
    }
    else {
      let i = 0
      for ( ; i < 9; i++)
        if (cellsTmp[i] === null)
          return state;

      state.gameState="Draw";
    }

    return state;
  }

  onClickCell(id) {
    let cellsTmp = [...this.state.cells];

    if (cellsTmp[id] != null)
      return;

    if (this.state.currentPlayer === "player 1") {
      cellsTmp[id] = 'X';
      this.setState({currentPlayer: "player 2",
                      cells: cellsTmp});
    }
    else {
      cellsTmp[id] = 'O';
      this.setState({currentPlayer: "player 1",
                      cells: cellsTmp});
    }
  }

  render() {
    return (
      <div style={gameLayoutStyle}>
        <GameInfo currentPlayer={this.state.currentPlayer} gameState={this.state.gameState}/>
        <Board cells={this.state.cells} onClickCell={(id) => this.onClickCell(id)}/>
      </div>
    );
  }
}

export default GameLayout;
