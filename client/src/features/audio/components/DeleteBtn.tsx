import { Dispatch } from "react";

interface DeleteBtnProps {
  audioSrc?: string;
  setAudioSrc: Dispatch<string | undefined>;
}

const DeleteBtn = ({ audioSrc, setAudioSrc }: DeleteBtnProps) => {
  if (audioSrc) {
    return (
      <button
        className="bg-red-500 rounded-full text-white font-bold p-2 h-16 w-16"
        onClick={() => setAudioSrc(undefined)}
      >
        Delete
      </button>
    );
  }

  return <div className="h-16 w-16" />;
};

export default DeleteBtn;
