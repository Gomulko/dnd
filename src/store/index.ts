import { defineStore } from "pinia";

export interface FormData {
  "Imię postaci": string;
  pd: number;
  input3: string;
  input4: string;
  "im gr": string;
  race: string;
  ins: number;
  klasa: string;
  poziom: number;
}

export const useMainStore = defineStore("main", {
  state: () => ({
    formData: {
      "Imię postaci": "Goratrex",
      pd: 0,
      input3: "",
      input4: "",
      "im gr": "Tomek",
      race: "",
      ins: 1,
      klasa: "Barbarzyńca",
      poziom: 1,
    },
  }),
  actions: {
    updateFormData<K extends keyof FormData>(key: K, value: FormData[K]) {
      this.formData[key] = value;
    },
  },
});