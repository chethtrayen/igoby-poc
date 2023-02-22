import { useSaveName } from "../api/saveName";

interface SaveBtnProps {
  audioSrc?: string;
}

const SaveBtn = ({ audioSrc }: SaveBtnProps) => {
  const { saveName } = useSaveName();

  if (audioSrc) {
    return (
      <button
        className="bg-green-500 rounded-full text-white font-bold p-2 h-16 w-16"
        onClick={() => saveName(audioSrc)}
      >
        Save
      </button>
    );
  }

  return <div className="h-16 w-16" />;
};

export default SaveBtn;
