import { StatusMessages } from "react-media-recorder";
import { useRecorder } from "../hooks/recorder";

interface RecordingBtnProps {
  startRecording: () => void;
  status: StatusMessages;
  stopRecording: () => void;
}

const RecordingBtn = ({ startRecording, status, stopRecording }: RecordingBtnProps) => {
  const { isRecording } = useRecorder(status);

  return (
    <button
      className="rounded-full border items-center justify-center border-gray-600 flex p-2 h-16 w-16"
      onClick={() => (isRecording ? stopRecording() : startRecording())}
    >
      {isRecording ? <div className="rounded bg-black w-6 h-6" /> : <div className="rounded-full bg-red-500 w-6 h-6" />}
    </button>
  );
};

export default RecordingBtn;
