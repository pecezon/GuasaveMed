import { jsPDF } from "jspdf";

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
