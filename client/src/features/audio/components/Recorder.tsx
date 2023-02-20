import { Dispatch, SetStateAction } from "react";
import { StatusMessages } from "react-media-recorder";
import { useSaveName } from "../api/saveName";
import { useRecorder } from "../hooks/recorder";

interface RecorderProps {
  audioSrc?: string;
  setAudioSrc: Dispatch<SetStateAction<string | undefined>>;
  startRecording: () => void;
  status: StatusMessages;
  stopRecording: () => void;
}

const Recorder = ({ audioSrc, setAudioSrc, startRecording, status, stopRecording }: RecorderProps) => {
  const { isRecording } = useRecorder(status);
  const { saveName } = useSaveName(setAudioSrc);

  return (
    <div className="flex flex-row" style={{ gap: "10px" }}>
      {audioSrc ? (
        <button
          className="bg-red-500 rounded-full text-white font-bold p-2 h-16 w-16"
          onClick={() => setAudioSrc(undefined)}
        >
          Delete
        </button>
      ) : (
        <div className="h-16 w-16" />
      )}

      <button
        className="rounded-full border items-center justify-center border-gray-600 flex p-2 h-16 w-16"
        onClick={() => (isRecording ? stopRecording() : startRecording())}
      >
        {isRecording ? (
          <div className="rounded bg-black w-6 h-6" />
        ) : (
          <div className="rounded-full bg-red-500 w-6 h-6" />
        )}
      </button>

      {audioSrc ? (
        <button
          className="bg-green-500 rounded-full text-white font-bold p-2 h-16 w-16"
          onClick={() => saveName(audioSrc)}
        >
          Save
        </button>
      ) : (
        <div className="h-16 w-16" />
      )}
    </div>
  );
};

export default Recorder;
