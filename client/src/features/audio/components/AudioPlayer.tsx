interface AudioPlayerProps {
  audioSrc?: string;
}

const AudioPlayer = ({ audioSrc }: AudioPlayerProps) => {
  if (!audioSrc) return null;

  return (
    <audio controls>
      <source src={audioSrc} />
    </audio>
  );
};

export default AudioPlayer;
