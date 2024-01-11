<template>
    <div>
      <label :for="inputId">{{ label }}</label>
      <input v-model="value" :id="inputId" type="text" class="form-control">
    </div>
  </template>
  
  <script>
  import { computed } from 'vue';
  import { useMainStore } from '@/store';
  
  export default {
    props: {
      label: String,
      dataText: String,
    },
    setup(props) {
      const store = useMainStore();
  
      const inputId = `input-${Math.random().toString(36).substring(2)}`;
  
      const value = computed({
        get: () => store.formData[props.dataText],
        set: (newValue) => {
          store.updateFormData(props.dataText, newValue);
        },
      });
  
      return {
        inputId,
        value,
      };
    },
  };
  </script>
  