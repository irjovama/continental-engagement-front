"use client";
import { useEffect, useState } from "react";
import ExcelJS from "exceljs";
import { exampleData } from "./example";
import showUsers from "../store/users/show";
import showCategories from "../store/categories/show";

export default function ExportPage() {
  const [datos, setDatos] = useState([]);
  const [categories, setCategories] = useState([]);
  useEffect(() => {
    showUsers().then((r) => {
      setDatos(r.data);
    });
    showCategories().then((r) => {
      setCategories(r.data);
    });
  }, []);
  return (
    <div>
      {JSON.stringify(categories && datos && "true")}
      <button
        onClick={() => {
          // Crea un nuevo libro de trabajo (workbook)
          const workbook = new ExcelJS.Workbook();

          const worksheet = workbook.addWorksheet("Respuestas");

          const columns = [
            { header: "Id", key: "id" },
            { header: "Nombre", key: "name" },
            { header: "Correo", key: "email" },
            { header: "Modalidad", key: "modality" },
            { header: "Terminado", key: "finishedAt" },
          ];

          let questions = [];
          for (let category of categories) {
            questions = [...questions, ...category.questions];
          }
          worksheet.columns = [
            ...columns,
            ...questions.map((q) => {
              return { header: q.content, key: q.id };
            }),
          ];
          // const datos = [
          //     { Nombre: 'John', Edad: 30, Results: [1, 2, 3, 4] },
          //     { Nombre: 'Jane', Edad: 28, Results: [2, 3, 4, 5] },
          //     { Nombre: 'Bob', Edad: 35, Results: [3, 4, 5, 6] },
          //   ];

          datos.forEach((item) => {
            const obj = {};
            for (let result of item.results) {
              if (result?.question && result.question?.id) {
                const key = result.question.id;
                const value = result.value;

                obj[key] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0].includes(+value)
                  ? +value
                  : value;
              }
            }
            const modItem = {
              ...item,
              ...obj,
            };

            worksheet.addRow(modItem);
          });

          // return;
          workbook.xlsx.writeBuffer().then((data) => {
            const blob = new Blob([data], {
              type: "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
            });
            const blobUrl = URL.createObjectURL(blob);

            // Crear un enlace de descarga
            const a = document.createElement("a");
            a.href = blobUrl;
            a.download = "mi-archivo.xlsx";
            a.textContent = "Descargar Excel";

            // Agregar el enlace al documento y hacer clic en él para descargar el archivo
            document.body.appendChild(a);
            a.click();
            a.remove();
          });
        }}
      >
        descargar
      </button>
    </div>
  );
}
