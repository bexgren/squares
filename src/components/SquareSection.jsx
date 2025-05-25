import PropTypes from "prop-types";
import Square from "./Square";
import { memo } from "react";

const SquareSection = memo(function SquareSection({ squares }) {
  console.log("in squaresection", squares);
  return (
    <div
      className={`grid grid-cols-${squares.length} grid-rows-${squares.length}  relative gap-5 m-auto`}
    >
      {squares.length > 0 && squares[0].id !== 0 ? (
        squares.map((item, index) => {
          return <Square key={index} item={item} index={index} />;
        })
      ) : (
        <p>Ingen ruta än</p>
      )}
    </div>
  );
});

SquareSection.propTypes = {
  boxes: PropTypes.array,
};
export default SquareSection;
