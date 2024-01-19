<template>
  <div class="container">
    <form>
      <div class="row">
        <div class="col">
          <div class="row">
            <div class="col">
              <form-input-text label="Imię postaci:" dataText="input1" />
            </div>
          </div>
          <div class="row">
            <div class="col">
              <form-input-text label="Imię Gracza:" dataText="playerName" />
            </div>
          </div>
          <div class="row">
            <div class="col">
              <form-input-text label="input3" dataText="input3" />
            </div>
          </div>
          <div class="row">
            <div class="col">
              <form-input-text label="input4:" dataText="input4" />
            </div>
          </div>
        </div>
        <div class="col">
          <p>opis</p>
        </div>
      </div>
      <FormInputSelect id="race" :values="dndConfig.race"> </FormInputSelect>
      <pdf-generator ref="pdfGenerator"></pdf-generator>
    </form>
  </div>
</template>

<script setup lang="ts">
  import PdfGenerator from "@/components/PdfGenerator.vue";
  import FormInputText from "@/components/inputs/FormInputText.vue";
  import FormInputSelect from "@/components/inputs/FormInputSelect.vue";
  import dndConfig from "@/assets/dnd.json";
</script>
