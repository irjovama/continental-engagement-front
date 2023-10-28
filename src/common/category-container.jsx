"use client";

import { useDrag } from "react-dnd";
import styled from "styled-components";

const Container = styled.div`
  background: lightblue;
  padding: 1rem;
  margin: 1rem;
  -webkit-box-shadow: 10px 10px 5px 0px rgba(0, 0, 0, 0.75);
  -moz-box-shadow: 10px 10px 5px 0px rgba(0, 0, 0, 0.75);
  box-shadow: 10px 10px 5px 0px rgba(0, 0, 0, 0.75);
  border-radius: 10px 10px 10px 10px;
  -moz-border-radius: 10px 10px 10px 10px;
  -webkit-border-radius: 10px 10px 10px 10px;
  border: 0px solid #000000;
  div {
    display: grid;
    grid-template-columns: 5fr 1fr; /* Tamaño de las columnas */
    gap: 2rem; /* Espacio entre las celdas */
  }
`;

export default function CategoryContainer({
  id,
  oldIndex,
  children,
  collapsed,
  name,
}) {
  const [{ isDragging }, drag] = useDrag({
    type: "DRAGGABLE_COMPONENT",
    item: { id, oldIndex },
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
    }),
  });

  return (
    <Container
      ref={drag}
      style={{
        opacity: isDragging ? 0.5 : 1,
        cursor: "pointer",
      }}
    >
      {!collapsed ? children : name}
    </Container>
  );
}
