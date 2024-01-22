<template>
  <div class="container character-stats-randomizer">
    <div class="row justify-content-around">
      <div
        class="col-auto text-center"
        v-for="stat in generatedStats"
        :key="stat.id"
      >
        <div class="stat" :class="{ 'crossed-out': isStatSelected(stat.id) }">
          {{ stat.total }}
        </div>
        <div class="rolls">
          <span
            v-for="(roll, rollIndex) in stat.rolls"
            :key="rollIndex"
            :class="{ 'crossed-out': rollIndex === stat.lowestIndex }"
            >{{ roll }}</span
          >
        </div>
      </div>
    </div>

    <div class="row justify-content-around mt-4">
      <div
        class="col-auto text-center"
        v-for="(label, index) in labels"
        :key="'label-' + index"
      >
        <div class="selected-stat">{{ getSelectedStatValue(index) }}</div>
        <select
          class="form-select"
          v-if="!isValueSelected(index)"
          v-model="selectedValues[index]"
        >
          <option disabled value="0">Wybierz wartość</option>
          <option
            v-for="stat in availableStats"
            :key="stat.id"
            :value="stat.id"
          >
            {{ stat.total }}
          </option>
        </select>
        <div>{{ label }}</div>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import { ref, computed, onMounted, watch } from 'vue'
import { useMainStore } from '@/store'

interface Stat {
  id: number
  rolls: number[]
  total: number
  lowestIndex: number
}

const mainStore = useMainStore()
const generatedStats = ref<Stat[]>([])
const labels = [
  'Siła',
  'Zręczność',
  'Kondycja',
  'Inteligencja',
  'Mądrość',
  'Charyzma',
]
const selectedValues = ref<number[]>(new Array(6).fill(0))

const availableStats = computed(() => {
  return generatedStats.value.filter(
    (stat) => !selectedValues.value.includes(stat.id)
  )
})

const generateStat = (): Stat => {
  let rolls = Array.from({ length: 4 }, () => Math.floor(Math.random() * 6) + 1)
  let sortedRolls = [...rolls].sort((a, b) => a - b)
  let lowestIndex = rolls.indexOf(sortedRolls[0])
  let total = rolls.reduce((a, b) => a + b, 0) - sortedRolls[0]
  let id = Math.random()
  return { id, rolls, total, lowestIndex }
}

const generateStats = () => {
  generatedStats.value = Array.from({ length: 6 }, generateStat)
}

const isValueSelected = (index: number) => {
  return selectedValues.value[index] !== 0
}

const isStatSelected = (statId: number) => {
  return selectedValues.value.includes(statId)
}

const getSelectedStatValue = (index: number) => {
  const stat = generatedStats.value.find(
    (stat) => stat.id === selectedValues.value[index]
  )
  return stat ? stat.total : 0
}

onMounted(generateStats)

const updateStoreValues = () => {
  const statMappings = {
    'Pole tekstowe 29': getSelectedStatValue(0),
    'Pole tekstowe 31': getSelectedStatValue(1),
    'Pole tekstowe 33': getSelectedStatValue(2),
    'Pole tekstowe 35': getSelectedStatValue(3),
    'Pole tekstowe 37': getSelectedStatValue(4),
    'Pole tekstowe 39': getSelectedStatValue(5),
  }

  for (const [key, value] of Object.entries(statMappings)) {
    mainStore.updateFormData(key, value)
  }
}

watch(selectedValues, updateStoreValues, { deep: true })
</script>

<style>
.character-stats-randomizer {
  width: 100%;
}

.stat,
.selected-stat {
  border: 2px solid black;
  border-radius: 50%;
  width: 40px;
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 10px;
}

.crossed-out {
  text-decoration: line-through;
}

.rolls span {
  padding: 0 3px;
}

.form-select {
  margin-bottom: 5px;
}
</style>
