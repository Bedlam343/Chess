import { ReactElement } from "react";

import "components/Chessboard/Chessboard.css";
import { HORIZONTAL_AXIS, VERTICAL_AXIS } from "utils/constants/axis";
import Tile from "components/Tile/Tile";
import PIECES from "utils/constants/pieces";

const Chessboard = () => {
  const board: ReactElement[] = [];

  for (let j = VERTICAL_AXIS.length - 1; j >= 0; j--) {
    for (let i = 0; i < HORIZONTAL_AXIS.length; i++) {
      const number = i + j + 2;
      let image: string = "";

      PIECES.forEach((piece) => {
        if (piece.x === i && piece.y === j) {
          image = piece.image;
        }
      });

      board.push(<Tile number={number} image={image} />);
    }
  }

  return <div id="chessboard">{board}</div>;
};

export default Chessboard;
