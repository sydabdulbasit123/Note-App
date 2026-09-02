import React, { useEffect, useState } from "react";
import Note_card from "./components/Note_card";

const App = () => {
  const [title, setTitle] = useState("");
  const [details, setDetails] = useState("");

  const [note, setnote] = useState([]);

  const savedNotes = localStorage.getItem("notes");
  useEffect(() => {
    setnote(JSON.parse(savedNotes));
  }, []);

  useEffect(() => {
    localStorage.setItem("notes", JSON.stringify(note));
  }, [note]);

  const formtitle = (e) => {
    setTitle(e.target.value);
  };
  const formdetails = (e) => {
    setDetails(e.target.value);
  };

  const form = (e) => {
    e.preventDefault();

    const copynote = [...note];

    copynote.push({ title, details });

    setnote(copynote);

    setDetails("");
    setTitle("");
  };

  const deletenote = (idx) => {
    const copynote = [...note];

    copynote.splice(idx, 1);
    setnote(copynote);
  };

  return (
    <div className="flex p-6 gap-7 not-lg:flex-col min-h-screen min-w-full bg-zinc-900 overflow-hidden">
      <div className="lg:min-w-[36%]  ">
        <form
          onSubmit={(e) => {
            form(e);
          }}
          className="flex flex-col flex-start gap-4 "
        >
          <input
            required
            type="text"
            value={title}
            onChange={(e) => {
              formtitle(e);
            }}
            className="bg-zinc-800 not-lg:w-1/2 w-3/4 text-gray-300 placeholder:text-gray-500 border px-4 py-2 border-gray-600 rounded-md"
            placeholder="Enter a note..."
          />
          <textarea
            required
            value={details}
            onChange={(e) => {
              formdetails(e);
            }}
            className="bg-zinc-800 not-lg:w-1/2 w-3/4 text-gray-300 placeholder:text-gray-500 border px-4 py-2 border-gray-600 rounded-md"
            placeholder="Enter note details..."
          ></textarea>
          <button
            type="submit"
            className="bg-blue-500 not-lg:w-1/2 w-3/4 text-white py-2 px-4 rounded-md hover:bg-blue-600 active:scale-95"
          >
            Add Note
          </button>
        </form>
      </div>
      <div className="lg:min-w-[64%] flex gap-6  flex-wrap">
        {note.map(function (elem, idx) {
          return (
            <Note_card
              key={idx}
              text={elem.title}
              desc={elem.details}
              onDelete={() => deletenote(idx)}
            />
          );
        })}
      </div>
    </div>
  );
};

export default App;
