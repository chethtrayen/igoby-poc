import { convertBlobToBytes } from "../../../utils/converter";
import { request } from "../../../utils/request";

const _saveName = (data: string) => {
  const formData = new FormData();
  formData.append("audio", data);
  return request.post("/name/save", formData);
};

export const useSaveName = () => {
  const saveName = async (url: string) => {
    const base64data = (await convertBlobToBytes(url)) as unknown as string;
    await _saveName(base64data);
  };

  return { saveName };
};
