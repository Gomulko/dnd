<template>
  <div class="container">
    <form>
      <div class="row">
        <div class="col">
          <div class="row">
            <div class="col">
              <form-input-simple label="Imię postaci:" dataText="characterName" />
            </div>
          </div>
          <div class="row">
            <div class="col">
              <form-input-simple label="Imię Gracza:" dataText="playerName" />
            </div>
          </div>
          <div class="row">
            <div class="col">
              <form-input-simple label="Inspiracja" dataText="ins" inputType="number"/>
            </div>
          </div>
          <div class="row">
            <div class="col">
              <form-input-simple label="input4:" dataText="input4" />
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
  import FormInputSimple from "@/components/inputs/FormInputSimple.vue";
  import FormInputSelect from "@/components/inputs/FormInputSelect.vue";
  import dndConfig from "@/assets/dnd.json";
</script>
