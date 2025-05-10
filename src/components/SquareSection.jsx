import PropTypes from "prop-types";

const SquareSection = ({ boxes }) => {
  return (
    <div
      className={`grid grid-cols-${boxes.length} grid-rows-${boxes.length}  relative gap-5 m-auto`}
    >
      {boxes.length > 0 ? (
        boxes.map((item, index) => {
          return (
            <div
              key={index}
              className={` col-start-${item.coordinate.column} col-end-${
                item.coordinate.column + 1
              } row-start-${item.coordinate.row}  row-end-${
                item.coordinate.row + 1
              } col-span-1`}
              style={{
                border: "2px solid black",
                backgroundColor: item.color,
                height: "28px",
                width: "28px",
                gridArea: `${item.coordinate.row}/${item.coordinate.column}/${
                  item.coordinate.row + 1
                }/${item.coordinate.column + 1}`,
                textAlign: "center",
              }}
            >
              {index + 1}
            </div>
          );
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
