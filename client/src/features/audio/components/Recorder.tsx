import { Dispatch, SetStateAction } from "react";
import { StatusMessages } from "react-media-recorder";

import DeleteBtn from "./DeleteBtn";
import RecordingBtn from "./RecordingBtn";
import SaveBtn from "./SaveBtn";

interface RecorderProps {
  audioSrc?: string;
  setAudioSrc: Dispatch<SetStateAction<string | undefined>>;
  startRecording: () => void;
  status: StatusMessages;
  stopRecording: () => void;
}

const Recorder = ({ audioSrc, setAudioSrc, startRecording, status, stopRecording }: RecorderProps) => {
  return (
    <div className="flex flex-row" style={{ gap: "10px" }}>
      <DeleteBtn setAudioSrc={setAudioSrc} audioSrc={audioSrc} />

      <RecordingBtn startRecording={startRecording} status={status} stopRecording={stopRecording} />

      <SaveBtn audioSrc={audioSrc} />
    </div>
  );
};

export default Recorder;
