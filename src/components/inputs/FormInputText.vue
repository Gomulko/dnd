<template>
  <div>
    <label :for="inputId">{{ label }}</label>
    <input v-model="value" :id="inputId" type="text" class="form-control">
  </div>
</template>

<script setup lang="ts">
import { computed, ref, defineProps } from 'vue';
import { useMainStore } from '@/store';

const props = defineProps({
  label: String,
  dataText: {
    type: String,
    required: true
  },
});

const store = useMainStore();

const inputId = ref(`input-${Math.random().toString(36).substring(2)}`);

const value = computed({
  get: () => store.formData[props.dataText as keyof typeof store.formData],
  set: (newValue) => {
    store.updateFormData(props.dataText as keyof typeof store.formData, newValue);
  },
});
</script>