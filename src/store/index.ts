import { defineStore } from 'pinia';

interface FormData {
  input1: string;
  input2: string;
  input3: string;
  input4: string;
}

export const useMainStore = defineStore('main', {
  state: () => ({
    formData: {
      input1: '',
      input2: '',
      input3: '',
      input4: ''
    }
  }),
  actions: {
    updateFormData(data: FormData) {
      this.formData = { ...data };
    }
  }
});
