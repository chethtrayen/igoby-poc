import { useReactMediaRecorder } from "react-media-recorder";
import { Link } from "react-router-dom";

import AudioPlayer from "../components/AudioPlayer";
import Recorder from "../components/Recorder";

import { useAudio } from "../hooks/useAudio";

const RecordingPage = () => {
  const { status, startRecording, stopRecording, mediaBlobUrl } = useReactMediaRecorder({ audio: true });
  const { audioSrc, setAudioSrc } = useAudio(mediaBlobUrl, status);

  return (
    <>
      <div>
        <Link to={"/search"}>Search</Link>
      </div>

      <input className="shadow border rounded p-1" />
      <Recorder
        audioSrc={audioSrc}
        setAudioSrc={setAudioSrc}
        startRecording={startRecording}
        stopRecording={stopRecording}
        status={status}
      />

      <AudioPlayer audioSrc={audioSrc} />
    </>
  );
};

export default RecordingPage;
