import PropTypes from "prop-types";
import Square from "./Square";

const SquareSection = ({ squares }) => {
  return (
    <div
      className={`grid grid-cols-${squares.length} grid-rows-${squares.length}  relative gap-5 m-auto`}
    >
      {squares.length > 0 ? (
        squares.map((item, index) => {
          return <Square key={index} item={item} index={index} />;
        })
      ) : (
        <p>Ingen ruta än</p>
      )}
    </div>
  );
};

SquareSection.propTypes = {
  boxes: PropTypes.array,
};
export default SquareSection;
