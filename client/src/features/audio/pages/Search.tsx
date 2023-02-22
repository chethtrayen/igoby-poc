import { Link } from "react-router-dom";

import SearchResults from "../components/SearchResults";
import { useNameInput } from "../hooks/useNameInput";

const SearchPage = () => {
  const { inputRef, triggerSearch, search } = useNameInput();

  return (
    <>
      <div>
        <Link to="/record">Add</Link>
      </div>

      <input className="shadow border rounded p-1" ref={inputRef} />
      <button
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold mx-2 py-1 px-4 rounded"
        onClick={triggerSearch}
      >
        Search
      </button>

      {search.length > 3 ? <SearchResults search={search} /> : null}
    </>
  );
};

export default SearchPage;
