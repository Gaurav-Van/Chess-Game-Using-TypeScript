import { Piece } from "./piece";
import { FENChar, Color, Coords } from "../models";

export class Bishop extends Piece {
  protected override _FENChar: FENChar;
  protected override _directions: Coords[] = [
    {x:1, y:1},
    {x:1, y:-1},
    {x:-1, y:1},
    {x:-1, y:-1}
  ];

  constructor(private pieceColor: Color) {
    super(pieceColor);
    this._FENChar = pieceColor === Color.White ? FENChar.WhiteBishop : FENChar.BlackBishop;
  }
}
