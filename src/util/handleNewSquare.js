import { colorPicker } from "./colorPicker";
import { fetchFromApi, fetchPost, fetchPut } from "./fetches";

export const handleNewSquare = ({ picked, setPicked, setSquares, squares }) => {
  let squareList = squares;

  console.log(squares);
  if (squareList[0].id === 0) {
    const newColor = colorPicker();
    const newObject = {
      Id: 1,
      Color: newColor,
      X: 1,
      Y: 1,
    };
    squareList[0] = newObject;
    fetchPut(newObject);
    squareList = fetchFromApi(setSquares, squares);
    setSquares(squareList);
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
        if (squares[squares.length - 1].Y === 1) {
          const newObject = {
            Color: newColor,
            Y: squares[squares.length - 1].X + 1,
            X: squares[squares.length - 1].Y,
          };
          squareList.push(newObject);
          fetchPost(newObject);
        } else if (
          squares[squares.length - 1].Y > squares[squares.length - 1].X
        ) {
          const newObject = {
            Color: newColor,
            Y: squares[squares.length - 1].coordinate.Y,
            X: squares[squares.length - 1].X + 1,
          };
          squareList.push(newObject);
          fetchPost(newObject);
        } else if (
          squares[squares.length - 1].Y <= squares[squares.length - 1].X
        ) {
          const newObject = {
            Color: newColor,
            Y: squares[squares.length - 1].Y - 1,
            X: squares[squares.length - 1].X,
          };
          squareList.push(newObject);
          fetchPost(newObject);
        }
        console.log(squareList);
        setSquares(squareList);
        setPicked(true);
        break;
      } else {
        setPicked(false);
      }
    } while (!picked);
  }
};
