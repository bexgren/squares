export const handleClearSquares = ({ setSquares }) => {
  localStorage.clear();
  setSquares([]);
};
