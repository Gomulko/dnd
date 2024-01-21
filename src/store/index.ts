import { defineStore } from "pinia";

export interface FormData {
  'Imię postaci': string;
  pd: number;
  input3: string;
  input4: string;
  'im gr': string;
  race: string;
  ins: number;
  'Pole tekstowe 29': number;
  'Pole tekstowe 31': number;
  'Pole tekstowe 33': number;
  'Pole tekstowe 35': number;
  'Pole tekstowe 37': number;
  'Pole tekstowe 39': number;
}

export const useMainStore = defineStore("main", {
  state: () => ({
    formData: {
      'Imię postaci': "Goratrex",
      pd: 0,
      input3: "",
      input4: "",
      'im gr': "Tomek",
      race: "",
      ins: 1,
      'Pole tekstowe 29': 0,
      'Pole tekstowe 31': 0,
      'Pole tekstowe 33': 0,
      'Pole tekstowe 35': 0,
      'Pole tekstowe 37': 0,
      'Pole tekstowe 39': 0,
    },
  }),
  actions: {
    updateFormData<K extends keyof FormData>(key: K, value: FormData[K]) {
      this.formData[key] = value;
    },
  },
});