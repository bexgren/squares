import { useState } from "react";
import { handleNewSquare } from "../util/handleNewSquare";
import { handleClearSquares } from "../util/handleClearSquares";
import SquareSection from "../components/SquareSection";
import Button from "../components/Button";

let squareList = localStorage.getItem("squares")
  ? JSON.parse(localStorage.getItem("squares"))
  : [];

const SquareScreen = () => {
  const [squares, setSquares] = useState(squareList);
  const [picked, setPicked] = useState(true);

  return (
    <main className="bg-blue-300 min-h-screen flex flex-col items-center gap-4 p-10">
      <SquareSection squares={squares} />
      <Button
        onClick={() =>
          handleNewSquare({
            squareList,
            picked,
            setPicked,
            setSquares,
            squares,
          })
        }
        text="Lägg till ruta"
      />
      {squareList.length !== 0 && (
        <Button
          onClick={() => {
            handleClearSquares({ setSquares });
            squareList = [];
          }}
          text="Rensa rutor"
        />
      )}
    </main>
  );
};

export default SquareScreen;
