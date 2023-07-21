import { ReactElement } from "react";

import "components/Chessboard/Chessboard.css";
import { HORIZONTAL_AXIS, VERTICAL_AXIS } from "utils/constants/axis";
import Tile from "components/Tile/Tile";
import PIECES from "utils/constants/pieces";

let activePiece: HTMLElement | null = null;

const grabPiece = (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
  const element = event.target as HTMLDivElement;

  if (element.classList.contains("chess-piece")) {
    // offset by 50 because we're grabbing from top-left corner
    const x = event.clientX - 50;
    const y = event.clientY - 50;
    element.style.position = "absolute";
    element.style.left = `${x}px`;
    element.style.top = `${y}px`;

    activePiece = element;
  }
};

const movePiece = (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
  if (activePiece) {
    const x = event.clientX - 50;
    const y = event.clientY - 50;
    activePiece.style.position = "absolute";
    activePiece.style.left = `${x}px`;
    activePiece.style.top = `${y}px`;
  }
};

const dropPiece = (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
  if (activePiece) {
    activePiece = null;
  }
};

const Chessboard = () => {
  const board: ReactElement[] = [];

  for (let j = VERTICAL_AXIS.length - 1; j >= 0; j--) {
    for (let i = 0; i < HORIZONTAL_AXIS.length; i++) {
      const number = j + i + 2;
      let image: string = "";

      PIECES.forEach((piece) => {
        if (piece.x === i && piece.y === j) {
          image = piece.image;
        }
      });

      board.push(<Tile key={`${j}${i}`} number={number} image={image} />);
    }
  }

  return (
    <div
      id="chessboard"
      onMouseDown={(event) => grabPiece(event)}
      onMouseMove={(event) => movePiece(event)}
      onMouseUp={(event) => dropPiece(event)}
    >
      {board}
    </div>
  );
};

export default Chessboard;
