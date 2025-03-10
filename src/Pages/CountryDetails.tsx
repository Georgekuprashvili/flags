import { useParams, useNavigate } from "react-router";
import { useStore } from "../Store/useStore";

const CountryDetails = () => {
  const { name } = useParams<{ name: string }>();
  const navigate = useNavigate();
  const country = useStore((state) =>
    state.countries.find((c) => c.name.common === name)
  );

  if (!country) return <p>Loading...</p>;

  return (
    <div className="p-6">
      <button
        className="mb-4 p-2 bg-gray-200 dark:bg-gray-300 rounded-md"
        onClick={() => navigate(-1)}
      >
        ← Back
      </button>
      <div className="flex flex-col md:flex-row items-center gap-[100px]">
        <img
          src={country.flags.png}
          alt={country.name.common}
          className="max-w-[560px] w-full h-[400px] object-cover"
        />
        <div>
          <h1 className="text-2xl font-bold">{country.name.common}</h1>

          <p className="font-bold">
            Population:
            <span className="font-[400]">
              {country.population.toLocaleString()}
            </span>
          </p>
          <p className="font-bold">
            Region: <span className="font-[400]">{country.region}</span>
          </p>

          <p className="font-bold">
            Capital:
            <span className="font-[400]">{country.capital?.[0] || "N/A"}</span>
          </p>

          <p className="font-bold">
            Top Level Domain:
            <span className="font-[400]">{country.tld?.[0] || "N/A"}</span>
          </p>

          <p className="font-bold">
            Currencies:
            <span className="font-[400]">
              {(country.currencies &&
                Object.values(country.currencies)
                  .map((currency) => currency.name)
                  .join(", ")) ||
                "N/A"}
            </span>
          </p>

          <p className="font-bold">
            Languages:
            <span className="font-[400]">
              {(country.languages &&
                Object.values(country.languages).join(", ")) ||
                "N/A"}
            </span>
          </p>

          <p className="font-bold">
            Border Countries:
            <span className="font-[400]">
              {country.borders && country.borders.length > 0
                ? country.borders.join(", ")
                : "None"}
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default CountryDetails;
