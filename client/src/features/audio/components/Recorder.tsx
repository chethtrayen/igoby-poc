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
    <div className="flex flex-row space-x-5">
      <DeleteBtn setAudioSrc={setAudioSrc} audioSrc={audioSrc} />

      <RecordingBtn startRecording={startRecording} status={status} stopRecording={stopRecording} />

      <SaveBtn audioSrc={audioSrc} />
    </div>
  );
};

export default Recorder;
