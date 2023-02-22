import { useEffect, useState } from "react";
import { StatusMessages } from "react-media-recorder";

export const useAudio = (mediaBlobUrl: string | undefined, status: StatusMessages) => {
  const [audioSrc, setAudioSrc] = useState<string>();

  // Ensure a rerender on AudioPlayer when new audio is sourced
  useEffect(() => {
    setAudioSrc(status === "stopped" ? mediaBlobUrl : undefined);

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [status]);

  return { audioSrc, setAudioSrc };
};
