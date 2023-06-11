import React, { useState } from "react";
import styles from "../styles/Content.module.css";
import Box from "./Box";
import Draggable from "./Draggable";
import Droppable from "./Droppable";
import DragDrop from "./DragDrop";

function Content() {
  const itemPositions = {
    first: { top: 50, left: 20 },
    second: { top: 50, left: 60 },
    third: { top: 50, left: 80 },
  };
  const [position, setPosition] = React.useState(itemPositions);
  console.log("drag rendered");
  const handleDrop = (item, monitor, state) => {
    const type = monitor.getItemType();
    let newState = state;
    const { x, y } = monitor.getDifferenceFromInitialOffset();
    let { top, left } = {};
    if (type === "drag-1") {
      top = state.first.top + y;
      left = state.first.left + x;
      newState = { ...state, first: { top, left } };
    }
    if (type === "drag-2") {
      top = state.second.top + y;
      left = state.second.left + x;
      newState = { ...state, second: { top, left } };
    }
    if (type === "drag-3") {
      top = state.third.top + y;
      left = state.third.left + x;
      newState = { ...state, third: { top, left } };
    }
    if (top > 0 && left > 0) {
      console.log(newState, "newState");
      setPosition((prev) => newState);
    }
  };

  const dragStyle = {
    first: {
      left: `${position.first.left}px`,
      top: `${position.first.top}px`,
    },
    second: {
      left: `${position.second.left}px`,
      top: `${position.second.top}px`,
    },
    third: {
      left: `${position.third.left}px`,
      top: `${position.third.top}px`,
    },
  };
  const [positions, setPositions] = useState(itemPositions);
  const resetItemPosition = () => {
    console.log(positions, "positions");
    console.log("clicked");
    setPosition(itemPositions);
  };

  return (
    <div className={styles.content}>
      <Box title="Drag Around">
        <Droppable
          accept="drag-5"
          handleDrop={handleDrop}
          big={true}
          style={{ textAlign: "start" }}
          state={position}>
          <Draggable
            type="drag-1"
            text="Drag Me!"
            style={dragStyle}
            hideWhenDrag={true}
            item={{ top: position.first.top, left: position.first.left }}
            state={position.first}
          />
          <Draggable
            type="drag-2"
            text="Drag Me!"
            style={dragStyle}
            hideWhenDrag={true}
            item={{ top: position.second.top, left: position.second.left }}
            state={position.second}
          />
          <Draggable
            type="drag-3"
            text="Drag Me!"
            style={dragStyle}
            hideWhenDrag={true}
            item={{ top: position.third.top, left: position.third.left }}
            state={position.third}
          />
        </Droppable>
        <Droppable
          accept={["drag-1", "drag-2", "drag-3"]}
          handleDrop={handleDrop}
          big={true}
          style={{ textAlign: "start" }}
          state={position}></Droppable>
      </Box>
      <button className={styles.button} onClick={resetItemPosition}>
        Reset
      </button>
    </div>
  );
}

export default Content;
