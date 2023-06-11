import React from "react";
import { useDrag } from "react-dnd";
import styles from "../styles/Draggable.module.css";

function Draggable({ children, type, item, text, style, hideWhenDrag, state }) {
  if (type === "drag-1") {
    style = { ...style.first, position: "relative", justifyContent: "left" };
  }
  if (type === "drag-2") {
    style = { ...style.second, position: "relative", justifyContent: "left" };
  }
  if (type === "drag-3") {
    style = { ...style.third, position: "relative", justifyContent: "left" };
  }
  // console.log(style, "style");
  const [{ isDragging }, drag] = useDrag(
    () => ({
      type,
      item,
      collect: (monitor) => ({
        isDragging: !!monitor.isDragging(),
      }),
    }),
    [state]
  );

  if (isDragging && hideWhenDrag) {
    return <div ref={drag}></div>;
  }

  return (
    <span
      className={`${styles.draggable} ${isDragging && styles.dragging}`}
      style={style}
      ref={drag}>
      <span>{text}</span>
      {children}
    </span>
  );
}

export default Draggable;
