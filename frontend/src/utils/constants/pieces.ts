import blackPawn from "assets/images/pawn_b.png";
import whitePawn from "../../assets/images/pawn_w.png";
import blackRook from "../../assets/images/rook_b.png";
import whiteRook from "../../assets/images/rook_w.png";
import blackKnight from "../../assets/images/knight_b.png";
import whiteKnight from "../../assets/images/knight_w.png";
import blackBishop from "../../assets/images/bishop_b.png";
import whiteBishop from "../../assets/images/bishop_w.png";
import blackQueen from "../../assets/images/queen_b.png";
import whiteQueen from "../../assets/images/queen_w.png";
import blackKing from "../../assets/images/king_b.png";
import whiteKing from "../../assets/images/king_w.png";

interface Piece {
  image: string;

  x: number;
  y: number;
}

const PIECES: Piece[] = [];

for (let i = 0; i < 8; i++) {
  PIECES.push({ image: blackPawn, x: i, y: 6 });
}

for (let i = 0; i < 8; i++) {
  PIECES.push({ image: whitePawn, x: i, y: 1 });
}

PIECES.push({ image: blackRook, x: 0, y: 7 });
PIECES.push({ image: blackRook, x: 7, y: 7 });
PIECES.push({ image: whiteRook, x: 0, y: 0 });
PIECES.push({ image: whiteRook, x: 7, y: 0 });

PIECES.push({ image: blackKnight, x: 1, y: 7 });
PIECES.push({ image: blackKnight, x: 6, y: 7 });
PIECES.push({ image: whiteKnight, x: 1, y: 0 });
PIECES.push({ image: whiteKnight, x: 6, y: 0 });

PIECES.push({ image: blackBishop, x: 2, y: 7 });
PIECES.push({ image: blackBishop, x: 5, y: 7 });
PIECES.push({ image: whiteBishop, x: 2, y: 0 });
PIECES.push({ image: whiteBishop, x: 5, y: 0 });

PIECES.push({ image: blackQueen, x: 3, y: 7 });
PIECES.push({ image: whiteQueen, x: 3, y: 0 });

PIECES.push({ image: blackKing, x: 4, y: 7 });
PIECES.push({ image: whiteKing, x: 4, y: 0 });

export default PIECES;
