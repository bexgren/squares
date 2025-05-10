import { useState } from "react";
import Button from "./components/Button";
import SquareSection from "./components/SquareSection";

let squareList = localStorage.getItem("squares")
  ? JSON.parse(localStorage.getItem("squares"))
  : [];

function App() {
  // localStorage.clear();
  const [squares, setSquares] = useState(
    localStorage.getItem("squares")
      ? JSON.parse(localStorage.getItem("squares"))
      : []
  );
  const [picked, setPicked] = useState(true);
  const handleOnClick = () => {
    if (squareList.length === 0) {
      const newColor = colorPicker();
      const newObject = {
        id: 1,
        color: newColor,
        coordinate: { column: 1, row: 1 },
      };
      squareList.push(newObject);
      localStorage.setItem("squares", JSON.stringify(squareList));
      setSquares(JSON.parse(localStorage.getItem("squares")));
    } else {
      do {
        const newColor = colorPicker();

        const checkColor = squareList.find((item) => {
          if (item.color === newColor) {
            return true;
          } else {
            return false;
          }
        });

        if (!checkColor) {
          if (squares[squares.length - 1].coordinate.column === 1) {
            const newObject = {
              id: squares[squares.length - 1].id + 1,
              color: newColor,
              coordinate: {
                column: squares[squares.length - 1].coordinate.row + 1,
                row: squares[squares.length - 1].coordinate.column,
              },
            };
            squareList.push(newObject);
          } else if (
            squares[squares.length - 1].coordinate.column >
            squares[squares.length - 1].coordinate.row
          ) {
            const newObject = {
              id: squares[squares.length - 1].id + 1,
              color: newColor,
              coordinate: {
                column: squares[squares.length - 1].coordinate.column,
                row: squares[squares.length - 1].coordinate.row + 1,
              },
            };
            squareList.push(newObject);
          } else if (
            squares[squares.length - 1].coordinate.column <=
            squares[squares.length - 1].coordinate.row
          ) {
            const newObject = {
              id: squares[squares.length - 1].id + 1,
              color: newColor,
              coordinate: {
                column: squares[squares.length - 1].coordinate.column - 1,
                row: squares[squares.length - 1].coordinate.row,
              },
            };
            squareList.push(newObject);
          }
          localStorage.setItem("squares", JSON.stringify(squareList));
          setSquares(JSON.parse(localStorage.getItem("squares")));
          setPicked(true);
          break;
        } else {
          setPicked(false);
        }
      } while (!picked);
    }
  };

  // funktion som genererar ny färg
  const colorPicker = () => {
    return `rgb(${Math.floor(Math.random() * 255)}, ${Math.floor(
      Math.random() * 255
    )}, ${Math.floor(Math.random() * 255)})`;
  };
  return (
    <main className="bg-blue-300 min-h-screen flex flex-col items-center gap-4 p-10">
      <SquareSection boxes={squares} />
      <Button onClick={handleOnClick} text="Lägg till ruta" />
      {/* <Button onClick={() => localStorage.clear()} text="Rensa rutor" /> */}
    </main>
  );
}

export default App;
