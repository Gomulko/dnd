import { defineStore } from "pinia";
import { ref } from "vue";
export interface Mutates {
  klasa: string;
  poziom: number;
}
export interface FormData {
  "Imię postaci": string;
  pd: number;
  "im gr": string;
  rasa: string;
  ins: number;
  "Pole tekstowe 29": number;
  "Pole tekstowe 31": number;
  "Pole tekstowe 33": number;
  "Pole tekstowe 35": number;
  "Pole tekstowe 37": number;
  "Pole tekstowe 39": number;
  kip: string;
}

export const useMainStore = defineStore("main", () => {
  const mutates = ref<Mutates>({
    klasa: "Barbarzyńca",
    poziom: 1,
  });

  const formData = ref<FormData>({
    "Imię postaci": "Goratrex",
    pd: 0,
    "im gr": "Tomek",
    rasa: "",
    ins: 1,
    "Pole tekstowe 29": 0,
    "Pole tekstowe 31": 0,
    "Pole tekstowe 33": 0,
    "Pole tekstowe 35": 0,
    "Pole tekstowe 37": 0,
    "Pole tekstowe 39": 0,
    kip: mutates.value.klasa + " " + mutates.value.poziom,
  });

  function updateFormData<K extends keyof FormData>(
    key: K,
    value: FormData[K]
  ) {
    formData.value[key] = value;
  }
  function updateClassAndLevel<K extends keyof Mutates>(
    key: K,
    value: Mutates[K]
  ) {
    mutates.value[key] = value;
    formData.value.kip = mutates.value.klasa + " " + mutates.value.poziom;
  }

  return { formData, mutates, updateFormData, updateClassAndLevel };
});
