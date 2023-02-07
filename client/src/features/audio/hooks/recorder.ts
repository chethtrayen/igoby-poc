import { useEffect, useState } from "react";
import { StatusMessages } from "react-media-recorder";

export const useRecorder = (status: StatusMessages) => {
  const [isRecording, setIsRecording] = useState<boolean>(false);

  useEffect(() => {
    setIsRecording(status === "recording");
  }, [status]);

  return {
    isRecording,
  };
};
