import { Dispatch, SetStateAction } from "react";
import { convertBlobToBytes } from "../../../utils/converter";
import { request } from "../../../utils/request";

const _saveName = (data: string) => {
  const formData = new FormData();
  formData.append("audio", data);
  return request.post("/audio/save", formData);
};

export const useSaveName = (setAudioSrc: Dispatch<SetStateAction<string | undefined>>) => {
  const saveName = async (url: string) => {
    const base64data = (await convertBlobToBytes(url)) as unknown as string;
    await _saveName(base64data);
    setAudioSrc(base64data);
  };

  return { saveName };
};
