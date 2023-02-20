import { useEffect, useState } from "react";

import "./App.css";

import AudioPlayer from "./features/audio/components/AudioPlayer";
import SearchResults from "./features/audio/components/SearchResults";
import Recorder from "./features/audio/components/Recorder";

import { useNameInput } from "./features/audio/hooks/nameInput";
import { useReactMediaRecorder } from "react-media-recorder";

function App() {
  const { status, startRecording, stopRecording, mediaBlobUrl } = useReactMediaRecorder({ audio: true });
  const [audioSrc, setAudioSrc] = useState<string>();
  const { inputRef, triggerSearch, search } = useNameInput();

  // Ensure a rerender on AudioPlayer when new audio is sourced
  useEffect(() => {
    setAudioSrc(status === "stopped" ? mediaBlobUrl : undefined);

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [status]);

  return (
    <div className="App">
      <Recorder
        audioSrc={audioSrc}
        setAudioSrc={setAudioSrc}
        startRecording={startRecording}
        stopRecording={stopRecording}
        status={status}
      />
      <AudioPlayer audioSrc={audioSrc} />

      <input className="shadow border rounded mx-2 p-1" ref={inputRef} />
      <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" onClick={triggerSearch}>
        Search
      </button>

      {search.length > 3 ? <SearchResults search={search} /> : null}
    </div>
  );
}

export default App;
