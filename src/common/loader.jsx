"use client";
import styled from "styled-components";
import LoaderImage from "../assets/loader.svg";
const LoaderContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  align-items: center;
  justify-content: center;
  height: 100vh;
  color: #6802c1;
`;
export default function Loader() {
  return (
    <LoaderContainer>
      <div>
        <img src={LoaderImage} />
      </div>
      <strong>Cargando...</strong>
    </LoaderContainer>
  );
}
