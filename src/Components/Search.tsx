interface Props {
  setSearchTerm: (term: string) => void;
}

const Search = ({ setSearchTerm }: Props) => {
  return (
    <input
      type="text"
      placeholder="   Search for a country..."
      className="  w-80 shadow-2xl cursor-pointer"
      onChange={(e) => setSearchTerm(e.target.value)}
    />
  );
};

export default Search;
