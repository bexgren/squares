const Square = ({ item, index }) => {
  return (
    <div
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
};

export default Square;
