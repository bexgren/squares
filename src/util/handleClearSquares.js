import { fetchDelete } from "./fetches.js";

export const handleClearSquares = ({ setSquares }) => {
  const newObject = {
    id: 0,
    color: "rgb(123,123,123)",
    x: 0,
    y: 0,
  };
  setSquares([newObject]);

  return fetchDelete(newObject);
};
