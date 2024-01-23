<template>
  <div class="mt-4">
    <label :for="inputId">{{ label }}</label>
    <input
      v-model="value"
      :id="inputId"
      :data-description="label"
      :type="inputType"
      class="form-control"
    />
  </div>
</template>

<script setup lang="ts">
import { computed, ref, defineProps } from "vue";
import { useMainStore } from "@/store";

const props = defineProps({
  label: String,
  dataText: {
    type: String,
    required: true,
  },
  inputType: {
    type: String,
    default: "text",
    validator: (value: string) => ["text", "number"].includes(value),
  },
});
const store = useMainStore();
const inputId = ref(`input-${Math.random().toString(36).substring(2)}`);
const value = computed({
  get: () => {
    if (props.dataText === "poziom") {
      return store.mutates.poziom;
    } else {
      return store.formData[props.dataText as keyof typeof store.formData];
    }
  },
  set: (newValue) => {
    if (props.dataText === "poziom") {
      return store.updateClassAndLevel(
        props.dataText as keyof typeof store.mutates,
        newValue
      );
    } else {
      store.updateFormData(
        props.dataText as keyof typeof store.formData,
        newValue
      );
    }
  },
});
</script>
