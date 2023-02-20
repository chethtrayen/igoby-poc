import { request } from "../../../utils/request";
import { useQuery } from "@tanstack/react-query";

interface NameResult {
  results: string[];
  success: boolean;
}

const getName = async (): Promise<NameResult> => {
  const { data } = await request.get("/name");
  return data;
};

export const useGetName = (name: string) => {
  return useQuery({ queryKey: ["name", name], queryFn: getName });
};
