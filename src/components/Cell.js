import React from "react";

const cellStyle1 = {
  display: "block",
  backgroundColor: "white",
  width: "200px",
  height: "200px",
  border: "1px solid #333",
  outline: "none",
  textAlign: "center",
  lineHeight: "200px",
  cursor: "pointer"
};

const cellStyle2 = {
  display: "block",
  backgroundColor: "grey",
  width: "200px",
  height: "200px",
  border: "1px solid #333",
  outline: "none",
  textAlign: "center",
  lineHeight: "200px",
  cursor: "pointer"
};

//const Cell = () => <div style={cellStyle}>?</div>;

class Cell extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      cellStyle: cellStyle1
    };
  }

  render() {
    return (
      <div style={this.state.cellStyle}
      onMouseOver={() => this.setState({cellStyle: cellStyle2})}
      onMouseOut={() => this.setState({cellStyle: cellStyle1})}
      onClick={() => this.props.onClickCell()}>
       {this.props.value}
      </div>
    );
  }
}


export default Cell;
