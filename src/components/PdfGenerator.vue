<template>
  <button @click="createPdf">Utwórz PDF</button>
</template>

<script>
import { PDFDocument, rgb } from 'pdf-lib';
import existingPdf from '@/assets/karta-postaci-interaktywna.pdf';
import { useMainStore } from '@/store';

export default {
  name: 'PdfGenerator',
  methods: {
    async createPdf() {
      const store = useMainStore();
      console.log("Dane z formularza w store:", store.formData);
      const formData = store.formData;

      const existingPdfBytes = await fetch(existingPdf).then(res => res.arrayBuffer());
      const pdfDoc = await PDFDocument.load(existingPdfBytes);

      // const pages = pdfDoc.getPages();
      // const firstPage = pages[0];
      // const { height } = firstPage.getSize();
      // const fontSize = 12;
      // firstPage.drawText(`${formData.input1}`, {
      //   x: 60,
      //   y: height - 75,
      //   size: fontSize,
      //   color: rgb(0, 0, 0),
      // });
      // firstPage.drawText(`${formData.input2}`, {
      //   x: 269,
      //   y: height - 62,
      //   size: fontSize,
      //   color: rgb(0, 0, 0),
      // });

      const form = pdfDoc.getForm();
      const fields = form.getFields();
      fields.forEach((field) => {
      const type = field.constructor.name;
      const name = field.getName();
      console.log(`${type}: ${name}`);
      });
      const nameField = form.getTextField("Imię postaci");
      nameField.setText(formData.input1);
      const pdfBytes = await pdfDoc.save();
      const blob = new Blob([pdfBytes], { type: 'application/pdf' });
      const pdfUrl = URL.createObjectURL(blob);
      window.open(pdfUrl);
    }
  }
}
</script>

<style>
/* Styl dla przycisku */
</style>
