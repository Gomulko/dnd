<template>
    <div>
      <p>{{ currentDescription }}</p>
    </div>
  </template>
  
  <script setup lang="ts">
  import { ref, onMounted, onUnmounted } from 'vue';
  
  const currentDescription = ref('');
  
  const updateDescription = (event: FocusEvent) => {
    const target = event.target as HTMLElement;
    if (target && target.dataset.description) {
      currentDescription.value = target.dataset.description;
    } else {
      currentDescription.value = '';
    }
  };
  
  onMounted(() => {
    document.addEventListener('focusin', updateDescription);
  });
  
  onUnmounted(() => {
    document.removeEventListener('focusin', updateDescription);
  });
  </script>