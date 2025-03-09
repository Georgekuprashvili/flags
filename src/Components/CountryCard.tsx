import { Link } from "react-router";

interface Props {
  country: {
    name: { common: string };
    population: number;
    region: string;
    capital?: string[];
    flags: { png: string };
  };
}

const CountryCard = ({ country }: Props) => {
  return (
    <Link
      to={`/country/${country.name.common}`}
      className=" rounded-lg shadow-md p-4"
    >
      <img
        src={country.flags.png}
        alt={country.name.common}
        className="w-full h-32 object-cover rounded"
      />
      <h2 className="text-lg font-bold mt-2">{country.name.common}</h2>
      <p>
        <strong>Population:</strong> {country.population.toLocaleString()}
      </p>
      <p>
        <strong>Region:</strong> {country.region}
      </p>
      <p>
        <strong>Capital:</strong> {country.capital?.[0] || "N/A"}
      </p>
    </Link>
  );
};

export default CountryCard;
