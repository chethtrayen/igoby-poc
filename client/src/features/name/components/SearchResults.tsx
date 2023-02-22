import { useGetName } from "../api/getNames";

interface NameResultsProps {
  search: string;
}

const NameResults = ({ search }: NameResultsProps) => {
  const { data } = useGetName(search);

  if (data) {
    if (data.results.length) {
      return (
        <ul>
          {data.results.map((e, i) => (
            <li key={i}>{e}</li>
          ))}
        </ul>
      );
    }

    return <p>No results found</p>;
  }

  return null;
};

export default NameResults;
