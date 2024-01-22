<template>
  <div class="container">
    <form>
      <div class="row">
        <div class="col">
          <div class="row mt-5">
            <div class="col">
              <form-input-simple
                label="Imię postaci:"
                dataText="Imię postaci"
              />
            </div>
          </div>
          <div class="row mt-5">
            <div class="col">
              <form-input-simple label="Imię Gracza:" dataText="im gr" />
            </div>
          </div>
          <div class="row mt-5">
            <div class="col">
              <form-input-simple
                label="Inspiracja"
                dataText="ins"
                inputType="number"
              />
            </div>
          </div>
          <div class="row mt-5">
            <div class="col">
              <form-input-simple
                label="Punkty doświadczenia"
                dataText="pd"
                inputType="number"
              />
            </div>
          </div>
          <div class="row">
            <div class="col">
              <form-input-simple
                label="Poziom"
                dataText="poziom"
                inputType="number"
              />
            </div>
          </div>
          <div class="row">
            <div class="col">
              <!-- <FormInputSelect
                id="klasa"
                :values="
                  Object.values(dndConfig.classes).map((klasa) => klasa.name)
                "
              ></FormInputSelect> -->
            </div>
          </div>
          <div class="row mt-5">
            <div class="col">
              <FormInputSelect id="rasa" :values="dndConfig.rasa">
              </FormInputSelect>
            </div>
          </div>
          <div class="div">
            <div class="col">
              <CharacterStatsRandomizer />
            </div>
          </div>
        </div>
        <div class="col">
          <DynamicDescriptionDisplay />
        </div>
      </div>
      <div class="row mt-5">
        <div class="col">
          <pdf-generator ref="pdfGenerator"></pdf-generator>
        </div>
      </div>
    </form>
  </div>
</template>

<script setup lang="ts">
import PdfGenerator from '@/components/PdfGenerator.vue'
import DynamicDescriptionDisplay from '@/components/DynamicDescriptionDisplay.vue'
import FormInputSimple from '@/components/inputs/FormInputSimple.vue'
import FormInputSelect from '@/components/inputs/FormInputSelect.vue'
import CharacterStatsRandomizer from '@/components/CharacterStatsRandomizer.vue'
import dndConfig from '@/assets/dnd.json'
</script>
