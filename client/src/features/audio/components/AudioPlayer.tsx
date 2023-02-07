interface AudioPlayerProps {
  audioBlob?: string;
}

const AudioPlayer = ({ audioBlob }: AudioPlayerProps) => {
  if (!audioBlob) return null;

  return (
    <audio controls>
      <source src={audioBlob} />
    </audio>
  );
};

export default AudioPlayer;
