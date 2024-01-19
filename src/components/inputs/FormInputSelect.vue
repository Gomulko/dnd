<template>
  <div>
    <label :for="{ id }">Wybierz {{ id }}: </label>
    <br />
    <select :name="{ id }" :id="{ id }" v-model="selected">
      <option v-for="value in values" :key="value">{{ value }}</option>
    </select>
  </div>
</template>

<script setup lang="ts">
  import { defineProps, ref } from "vue";
  import { useMainStore } from "@/store";

  const props = defineProps({
    id: {
      type: String,
      required: true,
    },
    values: {
      type: Array,
      required: true,
    },
  });
  const store = useMainStore();
  const selected = ref();
  store.updateFormData(props.id as keyof typeof store.formData, selected);
</script>

<style lang="scss" scoped></style>
