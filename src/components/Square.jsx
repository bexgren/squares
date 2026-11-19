import { getOppositeColor } from "../util/oppositeColor";
const Square = ({ item }) => {
  const textColor = getOppositeColor(item.color);
  return (
    <div
      className={` col-start-${item.y} col-end-${item.y + 1} row-start-${
        item.x
      }  row-end-${item.y + 1} col-span-1`}
      style={{
        borderRadius: "4px",
        fontWeight: "bold",
        backgroundColor: item.color,
        // height: "28px",
        // width: "28px",
        gridArea: `${item.x}/${item.y}/${item.x + 1}/${item.y + 1}`,
        textAlign: "center",
        alignContent: "center",
        justifyContent: "center",
        color: textColor,
        padding: "8px",
        aspectRatio: "1/1",
      }}
    >
      {item.id}
    </div>
  );
};

export default Square;
