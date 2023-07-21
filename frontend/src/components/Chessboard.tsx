import React, { ReactElement } from "react";

import "./Chessboard.css";
import { HORIZONTAL_AXIS, VERTICAL_AXIS } from "../utils/constants";

const Chessboard = () => {
  const board: ReactElement[] = [];

  for (let j = 0; j < VERTICAL_AXIS.length; j++) {
    for (let i = 0; i < HORIZONTAL_AXIS.length; i++) {
      const number = i + j + 2;

      // even number tiles are light
      if (number % 2 === 0) {
        board.push(<div className="tile white-tile"></div>);
      } else {
        board.push(<div className="tile black-tile"></div>);
      }
    }
  }

  return <div id="chessboard">{board}</div>;
};

export default Chessboard;
