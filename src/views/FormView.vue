<template>
  <div class="container">
    <form @submit.prevent="handleSubmit">
      <div class="row">
        <div class="col">
          <label for="input1">Imię postaci:</label>
          <input v-model="formData.input1" id="input1" type="text" class="form-control">
        </div>
        <div class="col">
          <label for="input2">Input 2</label>
          <input v-model="formData.input2" id="input2" type="text" class="form-control">
        </div>
      </div>
      <div class="row">
        <div class="col">
          <label for="input3">Input 3</label>
          <input v-model="formData.input3" id="input3" type="text" class="form-control">
        </div>
        <div class="col">
          <label for="input4">Input 4</label>
          <input v-model="formData.input4" id="input4" type="text" class="form-control">
        </div>
      </div>
      <button type="submit" class="btn btn-primary mt-3">Wyślij</button>
    </form>

    <div class="mt-3">
      <h3>Dane ze store:</h3>
      <p>Imię postaci: {{ store.formData.input1 }}</p>
      <p>Input 2: {{ store.formData.input2 }}</p>
      <p>Input 3: {{ store.formData.input3 }}</p>
      <p>Input 4: {{ store.formData.input4 }}</p>
    </div>
    <pdf-generator ref="pdfGenerator"></pdf-generator>
  </div>
</template>

<script>
import { useMainStore } from '@/store';
import PdfGenerator from '@/components/PdfGenerator.vue';

export default {
  name: 'FormView',
  components: {
   PdfGenerator
  },
  data() {
    return {
      formData: {
        input1: '',
        input2: '',
        input3: '',
        input4: ''
      },
    };
  },
  computed: {
    store() {
      return useMainStore();
    }
  },
  methods: {
    handleSubmit() {
      this.store.updateFormData(this.formData);
      this.$refs.pdfGenerator.createPdf();
    }
  }
};
</script>
