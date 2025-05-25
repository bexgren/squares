import { fetchDelete } from "./fetches";

export const handleClearSquares = ({ setSquares }) => {
  fetchDelete();
  localStorage.clear();
  setSquares([]);
};
