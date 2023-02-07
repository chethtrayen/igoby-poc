import { useEffect, useState } from "react";

import "./App.css";
import { useReactMediaRecorder } from "react-media-recorder";

import AudioPlayer from "./features/audio/components/AudioPlayer";
import Recorder from "./features/audio/components/Recorder";

function App() {
  const { status, startRecording, stopRecording, mediaBlobUrl } = useReactMediaRecorder({ audio: true });
  const [audioBlob, setAudioBlob] = useState<string>();

  // Ensure a rerender on AudioPlayer when new audio is sourced
  useEffect(() => {
    setAudioBlob(status === "stopped" ? mediaBlobUrl : undefined);

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [status]);

  return (
    <div className="App">
      <div>{status}</div>
      <p className="text-3xl text-gray-700 font-bold mb-5">Welcome!</p>
      <Recorder startRecording={startRecording} stopRecording={stopRecording} status={status} />
      <AudioPlayer audioBlob={audioBlob} />
    </div>
  );
}

export default App;
