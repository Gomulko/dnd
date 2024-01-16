<template>
  <div>
    <label :for="{ id }">Wybierz {{ id }}</label>
    <select :name="{ id }" :id="{ id }" v-model="selected">
      <option v-for="value in values" :key="value">{{ value }}</option>
    </select>
    <p>wybrana rasa: {{ store.formData.race }}</p>
  </div>
</template>

<script setup>
  import { defineProps, ref } from "vue";
  import { useMainStore } from "@/store";

  const props = defineProps(["id", "values"]);
  const store = useMainStore();
  const selected = ref();
  store.updateFormData(props.id, selected);
</script>

<style lang="scss" scoped></style>
