interface Props {
  setRegion: (region: string) => void;
}

const Filter = ({ setRegion }: Props) => {
  return (
    <select
      className="shadow-2xl p-2 bg-gray-300 rounded-[5px] cursor-pointer "
      onChange={(e) => setRegion(e.target.value)}
    >
      <option value="">Filter by Region</option>
      <option value="Africa">Africa</option>
      <option value="Americas">Americas</option>
      <option value="Asia">Asia</option>
      <option value="Europe">Europe</option>
      <option value="Oceania">Oceania</option>
    </select>
  );
};

export default Filter;
