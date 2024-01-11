<template>
  <div>
    <label :for="inputId">{{ label }}</label>
    <input v-model="value" :id="inputId" type="text" class="form-control">
  </div>
</template>

<script setup>
import { computed, ref, defineProps } from 'vue';
import { useMainStore } from '@/store';

const props = defineProps({
  label: String,
  dataText: String,
});

const store = useMainStore();

const inputId = ref(`input-${Math.random().toString(36).substring(2)}`);

const value = computed({
  get: () => store.formData[props.dataText],
  set: (newValue) => {
    store.updateFormData(props.dataText, newValue);
  },
});
</script>