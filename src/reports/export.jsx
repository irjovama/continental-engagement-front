"use client";
import { useEffect, useState } from "react";
import showCategoriesResults from "../store/categories/show-results";
import ExcelJS from "exceljs";
import { exampleData } from "./example";

export default function ExportPage() {
  const [datos, setDatos] = useState([]);
  useEffect(() => {
    showCategoriesResults().then((r) => {
      setDatos(r.data);
    });
  }, []);
  return (
    <div>
      <button
        onClick={() => {
          // Crea un nuevo libro de trabajo (workbook)
          const workbook = new ExcelJS.Workbook();
          for (let row of datos) {
            const name = row.name.replace(/\/|-/g, "");
            const worksheet = workbook.addWorksheet(name);
            const columns = [{ header: "", key: "" }];
            worksheet.columns = columns;
            // const datos = [
            //     { Nombre: 'John', Edad: 30, Results: [1, 2, 3, 4] },
            //     { Nombre: 'Jane', Edad: 28, Results: [2, 3, 4, 5] },
            //     { Nombre: 'Bob', Edad: 35, Results: [3, 4, 5, 6] },
            //   ];

            exampleData.data.forEach((item) => {
              console.log(item);
              worksheet.addRow(item);
            });
          }
          return;
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
