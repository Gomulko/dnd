<template>
    <div>
        <label :for={id}>Wybierz {{ name }}</label>
        <select :name={name} :id={id}  v-model="selected">
            <option v-for="value in values" :key="value">{{ value }}</option>
        </select>
        <p>wybrana rasa: {{ store.formData.race }}</p>
    </div>
</template>

<script setup>
    import { defineProps, ref } from 'vue';
    import { useMainStore } from "@/store";

    const props = defineProps(['id', 'name', 'values'])
    const store = useMainStore();
    const selected = ref();
    store.formData.race = selected;
</script>

<style lang="scss" scoped>

</style>