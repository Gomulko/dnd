<template>
  <div class="container">
    <form @submit.prevent="handleSubmit">
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
          <FormInputSelect
            :id="race.id"
            :name="race.name"
            :values="race.values"
          ></FormInputSelect>
        </div>
        <div class="col">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita,
            ab. Sed corporis saepe provident tenetur maxime quo esse voluptas
            tempora facere! Autem, rerum ipsum. Voluptates velit non
            voluptatibus esse maxime? Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Expedita, ab. Sed corporis saepe provident tenetur
            maxime quo esse voluptas tempora facere! Autem, rerum ipsum.
            Voluptates velit non voluptatibus esse maxime? Lorem ipsum dolor sit
            amet consectetur adipisicing elit. Expedita, ab. Sed corporis saepe
            provident tenetur maxime quo esse voluptas tempora facere! Autem,
            rerum ipsum. Voluptates velit non voluptatibus esse maxime? Lorem
            ipsum dolor sit amet consectetur adipisicing elit. Expedita, ab. Sed
            corporis saepe provident tenetur maxime quo esse voluptas tempora
            facere! Autem, rerum ipsum. Voluptates velit non voluptatibus esse
            maxime?
          </p>
        </div>
      </div>
      <pdf-generator ref="pdfGenerator"></pdf-generator>
    </form>
  </div>
</template>

<script>
  import { useMainStore } from "@/store";
  import PdfGenerator from "@/components/PdfGenerator.vue";
  import FormInputText from "@/components/inputs/FormInputText.vue";
  import FormInputSelect from "@/components/inputs/FormInputSelect.vue";
  export default {
    name: "FormView",
    components: {
      FormInputSelect,
      FormInputText,
      PdfGenerator,
    },
    computed: {
      store() {
        return useMainStore();
      },
    },
    methods: {
      async handleSubmit() {
        this.store.updateFormData(this.formData);
        await this.$refs.pdfGenerator.createPdf();
      },
    },
  };
</script>
