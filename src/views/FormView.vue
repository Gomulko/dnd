<template>
  <div class="container">
    <!-- Progress Bar -->
    <div class="progress-bar">
      <div
        v-for="n in 3"
        :key="n"
        class="step"
        :class="{ active: step >= n }"
      ></div>
    </div>

    <form @submit.prevent="nextStep">
      <div v-if="step === 1">
        <div class="row">
          <div class="col">
            <form-input-simple label="Imię postaci:" dataText="Imię postaci" />
            <form-input-simple label="Imię Gracza:" dataText="im gr" />
            <form-input-simple
              label="Inspiracja"
              dataText="ins"
              inputType="number"
            />
            <form-input-simple
              label="Punkty doświadczenia"
              dataText="pd"
              inputType="number"
            />
            <form-input-simple
              label="Poziom"
              dataText="poziom"
              inputType="number"
            />
          </div>
          <div class="col">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Perferendis quia, molestiae consectetur provident ullam, tempore
              sunt natus, corrupti dolore debitis laudantium incidunt veritatis
              ut architecto? Inventore dolores iure dicta excepturi?
            </p>
          </div>
        </div>
      </div>

      <div v-if="step === 2">
        <div class="row">
          <div class="col">
            <FormInputSelect
              id="rasa"
              :values="dndConfig.rasa"
            ></FormInputSelect>
          </div>
          <div class="col">
            <FormInputSelect
              id="klasa"
              :values="
                Object.values(dndConfig.classes).map((klasa) => klasa.name)
              "
            ></FormInputSelect>
          </div>
          <div class="col">
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolores
              vero corporis similique eos tempora, ipsa debitis. Sequi ipsum ut
              ipsam nostrum quisquam. Accusantium cumque in nisi architecto eos
              magnam quisquam.
            </p>
          </div>
        </div>
      </div>

      <div v-if="step === 3">
        <div class="row">
          <div class="col">
            <CharacterStatsRandomizer />
          </div>
          <div class="col">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed, iure
              animi? Quam voluptatibus ea impedit atque fugit corrupti inventore
              ullam? Autem voluptatibus nisi recusandae, in a assumenda
              accusantium ipsum alias?
            </p>
          </div>
        </div>
      </div>

      <div class="row mt-4">
        <div class="col">
          <button
            type="button"
            class="btn btn-secondary"
            @click="previousStep"
            v-if="step > 1"
          >
            Wstecz
          </button>
        </div>
        <div class="col">
          <button type="submit" class="btn btn-primary" v-if="step < 3">
            Dalej
          </button>
          <div v-if="step === 3">
            <pdf-generator ref="pdfGenerator"></pdf-generator>
          </div>
        </div>
      </div>
    </form>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import PdfGenerator from "@/components/PdfGenerator.vue";
import FormInputSimple from "@/components/inputs/FormInputSimple.vue";
import FormInputSelect from "@/components/inputs/FormInputSelect.vue";
import CharacterStatsRandomizer from "@/components/CharacterStatsRandomizer.vue";
import dndConfig from "@/assets/dnd.json";

const step = ref(1);

const nextStep = () => {
  if (step.value < 3) {
    step.value++;
  }
};

const previousStep = () => {
  if (step.value > 1) {
    step.value--;
  }
};
</script>

<style>
.progress-bar {
  display: flex;
  justify-content: space-between;
  margin-bottom: 20px;
  flex-direction: row;
}

.step {
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: #ccc;
}

.step.active {
  background-color: #4caf50;
}
</style>
