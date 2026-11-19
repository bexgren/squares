import { colorPicker } from "./colorPicker";
import { fetchPost, fetchPut } from "./fetches";
export const handleNewSquare = ({ setSquares, squares }) => {
  let squareList = squares.slice();
  let picked = true;
  if (squareList[0].id === 0) {
    const newColor = colorPicker();
    const newObject = {
      id: 1,
      color: newColor,
      x: 1,
      y: 1,
    };
    fetchPut(newObject);
    setSquares([newObject]);
  } else {
    do {
      const newColor = colorPicker();
      const checkColor = squareList.find((item) => {
        return item.Color === newColor ? true : false;
      });
      if (!checkColor) {
        const latestColumn = squareList[squareList.length - 1].y;
        const latestRow = squareList[squareList.length - 1].x;
        if (latestColumn === 1) {
          const newObject = {
            id: squareList.length + 1,
            color: newColor,
            y: latestRow + 1,
            x: latestColumn,
          };
          squareList.push(newObject);
          setSquares(squareList);
          fetchPost(newObject);
        } else if (latestColumn > latestRow) {
          const newObject = {
            id: squareList.length + 1,
            color: newColor,
            y: latestColumn,
            x: latestRow + 1,
          };
          squareList.push(newObject);
          setSquares(squareList);
          fetchPost(newObject);
        } else if (latestColumn <= latestRow) {
          const newObject = {
            id: squareList.length + 1,
            color: newColor,
            y: latestColumn - 1,
            x: latestRow,
          };
          squareList.push(newObject);
          setSquares(squareList);
          fetchPost(newObject);
        }
        setSquares(squareList);
        picked = true;
        break;
      } else {
        picked = false;
      }
    } while (!picked);
  }
};
