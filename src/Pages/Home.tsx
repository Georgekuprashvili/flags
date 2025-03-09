import { useEffect, useState } from "react";
import { useStore } from "../Store/useStore";
import Search from "../Components/Search";
import Filter from "../Components/Filter";
import CountryCard from "../Components/CountryCard";

const Home = () => {
  const { countries, fetchCountries } = useStore();
  const [searchTerm, setSearchTerm] = useState("");
  const [region, setRegion] = useState("");

  useEffect(() => {
    fetchCountries();
  }, [fetchCountries]);

  const filteredCountries = countries.filter(
    (country) =>
      country.name.common.toLowerCase().includes(searchTerm.toLowerCase()) &&
      (region ? country.region === region : true)
  );

  return (
    <div className="p-4">
      <div className="flex justify-between mb-4 pl-10 pr-10">
        <Search setSearchTerm={setSearchTerm} />
        <Filter setRegion={setRegion} />
      </div>
      <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {filteredCountries.map((country) => (
          <CountryCard key={country.name.common} country={country} />
        ))}
      </div>
    </div>
  );
};

export default Home;
