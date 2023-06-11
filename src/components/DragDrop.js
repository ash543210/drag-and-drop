import React from "react";
import Draggable from "./Draggable";
import Droppable from "./Droppable";

function DragDrop(props) {
  const [position, setPosition] = React.useState(props.positions);
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

  return (
    <>
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
          state={position.third}>
          <img
            src="https://images.unsplash.com/photo-1680507079908-bc48d1efa18c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
            alt="Grapefruit slice atop a pile of other slices"
          />
        </Draggable>
      </Droppable>
      <Droppable
        accept={["drag-1", "drag-2", "drag-3"]}
        handleDrop={handleDrop}
        big={true}
        style={{ textAlign: "start" }}
        state={position}
      />
    </>
  );
}

export default DragDrop;
