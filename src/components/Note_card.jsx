import React from "react";

const Note_card = (props) => {
  return (
    <div className="bg-amber-100 flex flex-col gap-2 h-60 w-44 px-2 py-4 rounded-2xl ">
      <h1 className="text-center text-zinc-800 uppercase text-[18px] font-medium">
        {props.text}
      </h1>
      <p className="italic text-zinc-600 line-clamp-6 leading-tight">
        {props.desc}
      </p>
      <button
        onClick={props.onDelete}
        className="mt-auto active:scale-95 p-1 bg-red-900 rounded-md"
      >
        Delete
      </button>
    </div>
  );
};

export default Note_card;
