import React from "react";
import Cell from "./Cell";

const boardStyle = {
  display: "grid",
  width: "600px",
  height: "calc(100%)",
  grid: "auto-flow dense / 1fr 1fr 1fr",
  gridAutoRows: "auto"
};

const Board = ({ cells = [], onClickCell }) => (
  <div style={boardStyle}>{cells.map((c, id) => <Cell onClickCell={() => onClickCell(id)} value={c}/>)}</div>
);

export default Board;
