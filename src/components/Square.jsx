const Square = ({ item, index }) => {
  console.log(item, index);
  return (
    <div
      className={` col-start-${item.y} col-end-${item.y + 1} row-start-${
        item.x
      }  row-end-${item.y + 1} col-span-1`}
      style={{
        border: "2px solid black",
        backgroundColor: item.color,
        height: "28px",
        width: "28px",
        gridArea: `${item.x}/${item.y}/${item.y + 1}/${item.y + 1}`,
        textAlign: "center",
      }}
    >
      {item.id ? item.id : index + 1}
    </div>
  );
};

export default Square;
