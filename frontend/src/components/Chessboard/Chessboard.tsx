import { ReactElement, useRef, useState } from "react";

import "components/Chessboard/Chessboard.css";
import { HORIZONTAL_AXIS, VERTICAL_AXIS } from "utils/constants/axis";
import Tile from "components/Tile/Tile";
import PIECES from "utils/constants/pieces";

const Chessboard = () => {
  console.log("Chessboard render");

  const board: ReactElement[] = [];
  const chessboardRef = useRef<HTMLDivElement>(null);
  let activePiece: HTMLDivElement | null = null;

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
    const chessboard = chessboardRef.current;
    if (activePiece && chessboard) {
      const minX = chessboard.offsetLeft;
      const minY = chessboard.offsetTop;
      const x = event.clientX - 50;
      const y = event.clientY - 50;
      activePiece.style.position = "absolute";
      activePiece.style.left = `${x}px`;
      activePiece.style.top = `${y}px`;

      // constrain movement here
    }
  };

  const dropPiece = (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    if (activePiece) {
      activePiece = null;
    }
  };

  return (
    <div
      id="chessboard"
      onMouseDown={(event) => grabPiece(event)}
      onMouseMove={(event) => movePiece(event)}
      onMouseUp={(event) => dropPiece(event)}
      ref={chessboardRef}
    >
      {board}
    </div>
  );
};

export default Chessboard;
