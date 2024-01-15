<template>
  <button class="btn btn-primary mt-3" @click="createPdf">
    Generuj postać
  </button>
</template>

<script>
  import { PDFDocument } from "pdf-lib";
  import existingPdf from "@/assets/karta-postaci-interaktywna.pdf";
  import { useMainStore } from "@/store";
  import fontkit from "@pdf-lib/fontkit";
  import font from "@/assets/font/Ubuntu-R.ttf";

  export default {
    name: "PdfGenerator",
    methods: {
      async createPdf() {
        const store = useMainStore();
        console.log("Dane z formularza w store:", store.formData);
        const formData = store.formData;
        const existingPdfBytes = await fetch(existingPdf).then((res) =>
          res.arrayBuffer()
        );
        const pdfDoc = await PDFDocument.load(existingPdfBytes);
        pdfDoc.registerFontkit(fontkit);
        const ubuntuBytes = await fetch(font).then((res) => res.arrayBuffer());
        const ubuntuFont = await pdfDoc.embedFont(ubuntuBytes);
        const form = pdfDoc.getForm();
        const rawUpdateFieldAppearances =
          form.updateFieldAppearances.bind(form);
        form.updateFieldAppearances = function () {
          return rawUpdateFieldAppearances(ubuntuFont);
        };
        const fields = form.getFields();
        fields.forEach((field) => {
          const type = field.constructor.name;
          const name = field.getName();
          // if (type === "PDFTextField") {
          //   field.setMaxLength(undefined);
          //   field.setText(name);
          // }
          console.log(`${type}: ${name}`);
        });
        const nameField = form.getTextField("Imię postaci");
        nameField.setText(formData.input1);
        const name2Field = form.getTextField("im gr");
        name2Field.setText(formData.playerName);
        const raceField = form.getTextField("rasa");
        raceField.setText(formData.race);
        const pdfBytes = await pdfDoc.save();
        const blob = new Blob([pdfBytes], { type: "application/pdf" });
        const pdfUrl = URL.createObjectURL(blob);
        window.open(pdfUrl);
      },
    },
  };
</script>
