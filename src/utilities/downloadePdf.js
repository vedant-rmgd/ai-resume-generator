import html2pdf from "html2pdf.js"

export default function downloadPDF(element, fileName = "resume.pdf") {
  const opt = {
    margin: 0.5,
    filename: fileName,
    image: { type: "jpeg", quality: 0.98 },
    html2canvas: { scale: 2 },
    jsPDF: { unit: "in", format: "letter", orientation: "portrait" },
  }

  html2pdf().set(opt).from(element).save()
}
