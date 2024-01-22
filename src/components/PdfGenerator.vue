<template>
  <button type="button" class="btn btn-primary mt-3" @click="createPdf">
    Generuj postać
  </button>
</template>

<script setup lang="ts">
import { PDFDocument, PDFFont } from 'pdf-lib'
import existingPdf from '@/assets/karta-postaci-interaktywna.pdf'
import { useMainStore, FormData } from '@/store'
import fontkit from '@pdf-lib/fontkit'

const store = useMainStore()

const createPdf = async () => {
  const formData = store.formData
  const existingPdfBytes = await fetch(existingPdf).then((res) =>
    res.arrayBuffer()
  )
  const pdfDoc = await PDFDocument.load(existingPdfBytes)
  pdfDoc.registerFontkit(fontkit)

  let ubuntuBytes: ArrayBuffer
  try {
    const response = await fetch(
      'https://pdf-lib.js.org/assets/ubuntu/Ubuntu-R.ttf'
    )
    ubuntuBytes = await response.arrayBuffer()
  } catch (error) {
    console.error('Failed to load Ubuntu font', error)
    return
  }

  const ubuntuFont = await pdfDoc.embedFont(ubuntuBytes)
  updatePdfForm(pdfDoc, formData, ubuntuFont)
  const pdfBytes = await pdfDoc.save()
  const blob = new Blob([pdfBytes], { type: 'application/pdf' })
  const pdfUrl = URL.createObjectURL(blob)
  window.open(pdfUrl)
}

const updatePdfForm = (
  pdfDoc: PDFDocument,
  formData: FormData,
  font: PDFFont
) => {
  const form = pdfDoc.getForm()
  const originalUpdateFieldAppearances = form.updateFieldAppearances
  form.updateFieldAppearances = function () {
    originalUpdateFieldAppearances.call(this, font)
  }

  for (const key in formData) {
    const value = formData[key as keyof FormData]
    const field = form.getTextField(key)
    if (field && value !== undefined) {
      field.setText(value.toString())
    }
  }
}
</script>
