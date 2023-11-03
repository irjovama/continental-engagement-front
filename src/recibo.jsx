"use client";
import React from "react";
import styled from "styled-components";

const ReciboContainer = styled.div`
  background-color: #ffffff;
  border: 1px solid #ddd;
  border-radius: 5px;
  padding: 20px;
  max-width: 400px;
  margin: 0 auto;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
`;

const CardContainer = styled.div`
  background-color: #f0f0f0;
  border-radius: 10px;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
  padding: 16px;
  margin: 16px;
  max-width: 300px;
  text-align: center;
`;

const CardTitle = styled.h2`
  font-size: 24px;
  color: #333;
  margin-bottom: 10px;
`;

const CardDescription = styled.p`
  font-size: 16px;
  color: #666;
`;

const CardButton = styled.button`
  background-color: #0074cc;
  color: #fff;
  border: none;
  padding: 8px 16px;
  border-radius: 5px;
  font-size: 16px;
  cursor: pointer;
`;

export default function ReciboPage() {
  return (
    <>
      <ReciboContainer>
        <h2>Recibo de Servicios</h2>
        <p>Nombre del Developer: Irving Jones Valdés Maciel</p>
        <p>Cliente: Universidad Continental</p>
        <p>Descripción de los Servicios:</p>

        <CardContainer>
          <CardTitle>Programación</CardTitle>
          <CardDescription>
            Servicio de Programación (8 horas) a $25 por hora TOTAL: $200.00 USD
          </CardDescription>
        </CardContainer>

        <CardContainer>
          <CardTitle>Hosting</CardTitle>
          <CardDescription>
            Hosting del sitio en Heroku TOTAL: $12.33 USD
          </CardDescription>
        </CardContainer>

        <p>Total a Pagar: $212.33 USD</p>
        <p>Forma de Pago: Transferencia interbancaria</p>
        <p>Fecha de Expedición: 01/11/2023</p>
        <p>¡Gracias!</p>
      </ReciboContainer>
    </>
  );
}
