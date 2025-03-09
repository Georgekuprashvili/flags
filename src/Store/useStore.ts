import { create } from "zustand";
import axios from "axios";

interface Country {
  name: {
    common: string;
  };
  flags: {
    png: string;
  };
  population: number;
  region: string;
  capital?: string[];
  tld?: string[];
  currencies?: {
    [key: string]: {
      name: string;
    };
  };
  languages?: {
    [key: string]: string;
  };
  borders?: string[];
}
interface State {
  countries: Country[];
  fetchCountries: () => void;
}

export const useStore = create<State>((set) => ({
  countries: [],
  fetchCountries: async () => {
    const response = await axios.get("https://restcountries.com/v3.1/all");
    set({ countries: response.data });
  },
}));
