import { useRef, useState } from "react";

export const useNameInput = () => {
  const [search, setSearch] = useState("");
  const inputRef = useRef<HTMLInputElement | null>(null);

  const triggerSearch = () => {
    if (inputRef.current) {
      setSearch(inputRef.current.value);
    }
  };

  return { inputRef, triggerSearch, search };
};
