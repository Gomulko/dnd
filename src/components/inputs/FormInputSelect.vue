<template>
  <div>
    <label :for="id">Wybierz {{ id }}: </label>
    <br />
    <select :name="id" :id="id" v-model="selected">
      <option v-for="value in values" :key="(value as keyof typeof String)">
        {{ value }}
      </option>
    </select>
  </div>
</template>

<script setup lang="ts">
  import { defineProps, ref, computed } from "vue";
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
  const selected = computed({
    get: () => store.formData[props.id as keyof typeof store.formData],
    set: (newValue) => {
      store.updateFormData(props.id as keyof typeof store.formData, newValue);
    },
  });
</script>

<style lang="scss" scoped></style>
