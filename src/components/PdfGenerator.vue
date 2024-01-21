<template>
  <button type="button" class="btn btn-primary mt-3" @click="createPdf">
    Generuj postać
  </button>
</template>

<script setup lang="ts">
import { PDFDocument, PDFFont } from "pdf-lib";
import existingPdf from "@/assets/karta-postaci-interaktywna.pdf";
import { useMainStore, FormData } from "@/store";
import fontkit from "@pdf-lib/fontkit";

const store = useMainStore();

const createPdf = async () => {
  const formData = store.formData;
  const existingPdfBytes = await fetch(existingPdf).then(res => res.arrayBuffer());
  const pdfDoc = await PDFDocument.load(existingPdfBytes);
  pdfDoc.registerFontkit(fontkit);
  const ubuntuBytes = await fetch('https://pdf-lib.js.org/assets/ubuntu/Ubuntu-R.ttf').then(res => res.arrayBuffer());
  const ubuntuFont = await pdfDoc.embedFont(ubuntuBytes);
  updatePdfForm(pdfDoc, formData, ubuntuFont);
  const pdfBytes = await pdfDoc.save();
  const blob = new Blob([pdfBytes], { type: "application/pdf" });
  const pdfUrl = URL.createObjectURL(blob);
  window.open(pdfUrl);
};

const updatePdfForm = (pdfDoc: PDFDocument, formData: FormData, font: PDFFont) => {
  const form = pdfDoc.getForm();
  const originalUpdateFieldAppearances = form.updateFieldAppearances;
  form.updateFieldAppearances = function() {
    originalUpdateFieldAppearances.call(this, font);
  };
  form.getTextField("Imię postaci").setText(formData['Imię postaci']);
  form.getTextField("im gr").setText(formData['im gr']);
  form.getTextField("rasa").setText(formData.race);
  form.getTextField("pd").setText(formData.pd.toString());
  form.getTextField("Pole tekstowe 29").setText(formData['Pole tekstowe 29'].toString());
  form.getTextField("Pole tekstowe 31").setText(formData['Pole tekstowe 31'].toString());
  form.getTextField("Pole tekstowe 33").setText(formData['Pole tekstowe 33'].toString());
  form.getTextField("Pole tekstowe 35").setText(formData['Pole tekstowe 35'].toString());
  form.getTextField("Pole tekstowe 37").setText(formData['Pole tekstowe 37'].toString());
  form.getTextField("Pole tekstowe 39").setText(formData['Pole tekstowe 39'].toString());
  form.getTextField("ins").setText(formData.ins.toString());
};
</script>