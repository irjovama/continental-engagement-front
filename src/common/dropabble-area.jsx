import React from 'react';
import { useDrop } from 'react-dnd';

const DroppableArea = ({ onDrop }) => {
  const [{ isOver }, drop] = useDrop({
    accept: 'DRAGGABLE_COMPONENT',
    drop: (item) => onDrop(item),
    collect: (monitor) => ({
      isOver: monitor.isOver(),
    }),
  });

  return (
    <div
      ref={drop}
      style={{
        border: `2px dashed ${isOver ? 'red' : 'lightgray'}`,
        minHeight: '5px',
      }}
    >
      posicionar
    </div>
  );
};

export default DroppableArea;
