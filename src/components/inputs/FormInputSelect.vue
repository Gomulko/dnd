<template>
  <div>
    <label :for="id">Wybierz {{ id }}: </label>
    <br />
    <select :name="id" :id="id" v-model="selected">
      <option v-for="(value, index) in values" :key="index" :value="value">
        {{ value }}
      </option>
    </select>
  </div>
</template>

<script setup lang="ts">
import { defineProps, computed, onMounted } from 'vue'
import { useMainStore } from '@/store'

const props = defineProps({
  id: {
    type: String,
    required: true,
  },
  values: {
    type: Array as () => string[],
    required: true,
  },
})

const store = useMainStore()
const selected = computed({
  get: () => {
    if (props.id === 'klasa') {
      return store.mutates.klasa
    } else {
      return (
        store.formData[props.id as keyof typeof store.formData] ||
        props.values[0]
      )
    }
  },
  set: (newValue) => {
    if (props.id === 'klasa') {
      return store.updateClassAndLevel(
        props.id as keyof typeof store.mutates,
        newValue
      )
    } else {
      return store.updateFormData(
        props.id as keyof typeof store.formData,
        newValue
      )
    }
  },
})

onMounted(() => {
  if (props.id === 'klasa') {
    return store.updateClassAndLevel(
      props.id as keyof typeof store.mutates,
      props.values[0]
    )
  } else {
    if (!store.formData[props.id as keyof typeof store.formData]) {
      store.updateFormData(
        props.id as keyof typeof store.formData,
        props.values[0]
      )
    }
  }
})
</script>
