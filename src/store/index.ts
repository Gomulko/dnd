import { defineStore } from "pinia";

export interface FormData {
  characterName: string;
  input2: string;
  input3: string;
  input4: string;
  playerName: string;
  race: string;
  ins: number;
}

export const useMainStore = defineStore("main", {
  state: () => ({
    formData: {
      characterName: "Goratrex",
      input2: "",
      input3: "",
      input4: "",
      playerName: "Tomek",
      race: "",
      ins: 1,
    },
  }),
  actions: {
    updateFormData<K extends keyof FormData>(key: K, value: FormData[K]) {
      this.formData[key] = value;
    },
  },
});
