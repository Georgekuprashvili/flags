import { BrowserRouter as Router, Routes, Route } from "react-router";
import { create } from "zustand";
import { useEffect, useState } from "react";
import axios from "axios";
import Home from "./Pages/Home";
import CountryDetails from "./Pages/CountryDetails";
import photo1 from "./assets/images/photo1.png";
import photo2 from "./assets/images/photo2.png";

interface Country {
  name: { common: string };
  population: number;
  region: string;
  capital: string[];
  flags: { png: string };
}

interface State {
  countries: Country[];
  fetchCountries: () => void;
}

const useStore = create<State>((set) => ({
  countries: [],
  fetchCountries: async () => {
    const response = await axios.get("https://restcountries.com/v3.1/all");
    set({ countries: response.data });
  },
}));

function App() {
  const savedDarkMode = localStorage.getItem("darkMode") === "true";
  const [darkMode, setDarkMode] = useState(savedDarkMode);

  const fetchCountries = useStore((state) => state.fetchCountries);

  useEffect(() => {
    fetchCountries();
  }, [fetchCountries]);

  useEffect(() => {
    localStorage.setItem("darkMode", String(darkMode));
  }, [darkMode]);

  return (
    <div
      className={
        darkMode
          ? "bg-gray-900 text-white min-h-screen"
          : "bg-white text-black min-h-screen"
      }
    >
      <Router>
        <div className="flex items-center justify-between p-10">
          <h1 className="text-4xl font-bold">Where in the world?</h1>
          <button onClick={() => setDarkMode(!darkMode)}>
            <img src={darkMode ? photo2 : photo1} alt="Toggle Dark Mode" />
          </button>
        </div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/country/:name" element={<CountryDetails />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
