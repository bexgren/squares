import { colorPicker } from "./colorPicker";
import { fetchFromApi, fetchPost, fetchPut } from "./fetches";

export const handleNewSquare = ({ setSquares, squares }) => {
  let squareList = squares.slice();
  let picked = true;
  console.log("add new square");
  console.log("list:", squareList);
  if (squareList[0].id === 0) {
    const newColor = colorPicker();
    const newObject = {
      id: 1,
      color: newColor,
      x: 1,
      y: 1,
    };
    console.warn("NEW square:", newObject); //ny ruta 1
    squareList[0] = newObject;
    console.log("updatedList:", squareList); //uppdaterad lista
    fetchPut(newObject);
    squareList = fetchFromApi(setSquares, squares);
    setSquares(squareList);
    // console.log("updatedList:", squareList); //uppdaterad lista
  } else {
    console.log("not first square!"); // alla rutor utom första
    console.log("picked?", picked); // vald-färg status
    do {
      console.log("inside color-checker"); // inne i colorcheck 1st
      const newColor = colorPicker();

      console.log(newColor); //newColor
      const checkColor = squareList.find((item) => {
        return item.Color === newColor ? true : false;
      });
      console.log("checkColor: ", checkColor); //checkColor
      if (!checkColor) {
        console.log("The new color is NEW"); // colorcheck false
        const latestColumn = squareList[squareList.length - 1].y;
        const latestRow = squareList[squareList.length - 1].x;
        console.log("latestColumn: ", latestColumn); // senaste kolumnen
        if (latestColumn === 1) {
          console.log("Kolumn 1 på senaste rutan"); //column 1 - latest
          const newObject = {
            id: squareList.length + 1,
            color: newColor,
            y: latestRow + 1,
            x: latestColumn,
          };
          console.log("new square:", newObject); //ny ruta
          squareList.push(newObject);
          setSquares(squareList);
          fetchPost(newObject);
        } else if (latestColumn > latestRow) {
          console.log("Kolumn-nr större än rad-nr"); // column > row - latest
          const newObject = {
            id: squareList.length + 1,
            color: newColor,
            y: latestColumn,
            x: latestRow + 1,
          };
          console.log("new square:", newObject); //ny ruta
          squareList.push(newObject);
          setSquares(squareList);
          fetchPost(newObject);
        } else if (latestColumn <= latestRow) {
          console.log("Rad-nr mindre eller likamed kolumn-nr"); // row <= column
          const newObject = {
            id: squareList.length + 1,
            color: newColor,
            y: latestColumn - 1,
            x: latestRow,
          };
          console.log("new square:", newObject); //ny ruta
          squareList.push(newObject);
          setSquares(squareList);
          fetchPost(newObject);
        }
        console.log("updated list:", squareList); //uppdaterad lista
        setSquares(squareList);
        picked = true;
        break;
      } else {
        console.log("annars..."); //else
        picked = false;
      }
    } while (!picked);
  }
};
