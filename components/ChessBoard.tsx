"use client";

import { useState, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";

type Piece = string | null;
type Board = Piece[][];

const INITIAL_BOARD: Board = [
  ["♜", "♞", "♝", "♛", "♚", "♝", "♞", "♜"],
  ["♟", "♟", "♟", "♟", "♟", "♟", "♟", "♟"],
  [null, null, null, null, null, null, null, null],
  [null, null, null, null, null, null, null, null],
  [null, null, null, null, null, null, null, null],
  [null, null, null, null, null, null, null, null],
  ["♙", "♙", "♙", "♙", "♙", "♙", "♙", "♙"],
  ["♖", "♘", "♗", "♕", "♔", "♗", "♘", "♖"],
];

const FILES = ["a", "b", "c", "d", "e", "f", "g", "h"];

function isWhitePiece(piece: string): boolean {
  return "♔♕♖♗♘♙".includes(piece);
}

function isBlackPiece(piece: string): boolean {
  return "♚♛♜♝♞♟".includes(piece);
}

export default function ChessBoard() {
  const [board, setBoard] = useState<Board>(
    INITIAL_BOARD.map((row) => [...row])
  );
  const [selected, setSelected] = useState<[number, number] | null>(null);
  const [lastMove, setLastMove] = useState<{
    from: [number, number];
    to: [number, number];
  } | null>(null);
  const [isWhiteTurn, setIsWhiteTurn] = useState(true);

  const handleSquareClick = useCallback(
    (row: number, col: number) => {
      const piece = board[row][col];

      if (selected) {
        const [sRow, sCol] = selected;
        const selectedPiece = board[sRow][sCol];

        if (sRow === row && sCol === col) {
          setSelected(null);
          return;
        }

        if (
          piece &&
          selectedPiece &&
          ((isWhitePiece(piece) && isWhitePiece(selectedPiece)) ||
            (isBlackPiece(piece) && isBlackPiece(selectedPiece)))
        ) {
          setSelected([row, col]);
          return;
        }

        const newBoard = board.map((r) => [...r]);
        newBoard[row][col] = selectedPiece;
        newBoard[sRow][sCol] = null;
        setBoard(newBoard);
        setLastMove({ from: [sRow, sCol], to: [row, col] });
        setSelected(null);
        setIsWhiteTurn(!isWhiteTurn);
      } else {
        if (piece) {
          if (isWhiteTurn && isWhitePiece(piece)) {
            setSelected([row, col]);
          } else if (!isWhiteTurn && isBlackPiece(piece)) {
            setSelected([row, col]);
          }
        }
      }
    },
    [board, selected, isWhiteTurn]
  );

  const resetBoard = () => {
    setBoard(INITIAL_BOARD.map((row) => [...row]));
    setSelected(null);
    setLastMove(null);
    setIsWhiteTurn(true);
  };

  return (
    <div className="flex flex-col items-center gap-4">
      <div className="relative">
        <div className="grid grid-cols-8 border border-[#2a2a3a] rounded-lg overflow-hidden shadow-2xl">
          {board.map((row, rowIndex) =>
            row.map((piece, colIndex) => {
              const isLight = (rowIndex + colIndex) % 2 === 0;
              const isSelected =
                selected &&
                selected[0] === rowIndex &&
                selected[1] === colIndex;
              const isLastMoveFrom =
                lastMove?.from[0] === rowIndex &&
                lastMove?.from[1] === colIndex;
              const isLastMoveTo =
                lastMove?.to[0] === rowIndex &&
                lastMove?.to[1] === colIndex;

              let bg = isLight ? "bg-gray-700/40" : "bg-gray-800/60";
              if (isSelected)
                bg = "bg-[#00e676]/20 ring-2 ring-inset ring-[#00e676]";
              else if (isLastMoveTo) bg = "bg-indigo-500/25";
              else if (isLastMoveFrom) bg = "bg-indigo-500/15";

              return (
                <button
                  key={`${rowIndex}-${colIndex}`}
                  onClick={() => handleSquareClick(rowIndex, colIndex)}
                  className={`w-9 h-9 sm:w-11 sm:h-11 md:w-14 md:h-14 flex items-center justify-center text-lg sm:text-xl md:text-3xl transition-all relative cursor-pointer hover:brightness-125 ${bg}`}
                >
                  <AnimatePresence mode="popLayout">
                    {piece && (
                      <motion.span
                        key={`${piece}-${rowIndex}-${colIndex}`}
                        initial={{ scale: 0.5, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        exit={{ scale: 0.5, opacity: 0 }}
                        transition={{ duration: 0.15 }}
                        className={`select-none drop-shadow-lg ${
                          isWhitePiece(piece) ? "text-white" : "text-gray-300"
                        }`}
                      >
                        {piece}
                      </motion.span>
                    )}
                  </AnimatePresence>
                </button>
              );
            })
          )}
        </div>

        <div className="grid grid-cols-8 mt-1">
          {FILES.map((f) => (
            <div
              key={f}
              className="text-center text-[10px] text-gray-600 font-mono"
            >
              {f}
            </div>
          ))}
        </div>
      </div>

      <div className="flex items-center gap-4">
        <span
          className={`text-xs font-mono px-3 py-1 rounded-full ${
            isWhiteTurn
              ? "bg-white/10 text-white"
              : "bg-gray-500/10 text-gray-400"
          }`}
        >
          {isWhiteTurn ? "● White" : "○ Black"} to move
        </span>
        <button
          onClick={resetBoard}
          className="text-xs text-gray-500 hover:text-white transition-colors font-mono"
        >
          Reset
        </button>
      </div>
    </div>
  );
}
