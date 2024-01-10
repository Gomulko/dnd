<template>
  <div class="container">
    <form @submit.prevent="handleSubmit">
      <div class="row">
        <div class="col">
          <div class="row">
            <div class="col">
              <label for="input1">Imię postaci:</label>
              <input v-model="formData.input1" id="input1" type="text" class="form-control">
            </div>
          </div>
          <div class="row">
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
          </div>
          <div class="row">
            <div class="col">
              <label for="input4">Input 4</label>
              <input v-model="formData.input4" id="input4" type="text" class="form-control">
            </div>
          </div>
          <div class="row">
            <div class="col">
              <label for="race">Input 4</label>
              <input v-model="formData.input4" id="input4" type="text" class="form-control">
            </div>
          </div>
          <SelectInput :id=race.id :name=race.name :values=race.values></SelectInput>
        </div>
        <div class="col">
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita, ab. Sed corporis saepe provident tenetur maxime quo esse voluptas tempora facere! Autem, rerum ipsum. Voluptates velit non voluptatibus esse maxime?
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita, ab. Sed corporis saepe provident tenetur maxime quo esse voluptas tempora facere! Autem, rerum ipsum. Voluptates velit non voluptatibus esse maxime?
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita, ab. Sed corporis saepe provident tenetur maxime quo esse voluptas tempora facere! Autem, rerum ipsum. Voluptates velit non voluptatibus esse maxime?
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita, ab. Sed corporis saepe provident tenetur maxime quo esse voluptas tempora facere! Autem, rerum ipsum. Voluptates velit non voluptatibus esse maxime?
          </p>
        </div>
      </div>
      <pdf-generator ref="pdfGenerator"></pdf-generator>
    </form>
  </div>
</template>

<script>
import { useMainStore } from '@/store';
import PdfGenerator from '@/components/PdfGenerator.vue';
import SelectInput from '@/components/inputs/SelectInput.vue'
export default {
  name: 'FormView',
  components: {
   PdfGenerator,
   SelectInput
  },
  data() {
    return {
      formData: {
        input1: '',
        input2: '',
        input3: '',
        input4: '',
      },
      race:{
        id: 'race',
        name: 'race',
        values: ['Człowiek', 'Ork', 'Elf', 'Krasnolud']
      }
    };
  },
  computed: {
    store() {
      return useMainStore();
    }
  },
  methods: {
   async handleSubmit() {
      this.store.updateFormData(this.formData);
      await this.$refs.pdfGenerator.createPdf();
    }
  }
};
</script>
