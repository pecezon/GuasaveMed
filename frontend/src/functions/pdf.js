import { jsPDF } from "jspdf";
import autoTable from "jspdf-autotable";

export function generarRecetaPDF(receta) {
  const doc = new jsPDF();

  // Título
  doc.setFontSize(18);
  doc.text("GuasaveMed", 105, 20, { align: "center" });

  // Información de la Receta
  doc.text(`ID Receta: ${receta.id}`, 20, 40);
  // Información del Paciente
  doc.setFontSize(14);
  doc.text(`ID Paciente: ${receta.paciente.id}`, 20, 50);

  // Información del Doctor
  doc.text(`ID Doctor: ${receta.empleado.id}`, 20, 60);

  // Medicamentos
  doc.text("Medicamentos:", 20, 70);
  doc.text(receta.medicamentos, 30, 80);

  // Especificaciones
  doc.text("Especificaciones:", 20, 90);
  doc.text(receta.especificaciones, 30, 100);

  // Descargar PDF
  doc.save("receta.pdf");
}

export function generarListadoCitasPDF(citas) {
  const doc = new jsPDF();

  doc.setFontSize(18);
  doc.text("GuasaveMed - Reporte de Pacientes", 14, 20);

  const headers = [
    [
      "ID Paciente",
      "Nombre",
      "Edad",
      "Teléfono",
      "Fecha",
      "Doctor",
      "Razón de Ingreso",
    ],
  ];

  const rows = citas.map((item) => [
    item.paciente.id,
    item.paciente.nombre,
    item.paciente.edad,
    item.paciente.telefono,
    new Date(item.fecha).toLocaleDateString(),
    item.empleado.nombre,
    item.razonIngreso || "No especificada",
  ]);

  autoTable(doc, {
    head: headers,
    body: rows,
    startY: 30,
    styles: { fontSize: 10 },
    headStyles: { fillColor: [22, 160, 133] },
  });

  doc.save("reporte_pacientes.pdf");
}
