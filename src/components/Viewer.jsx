import React from "react";
import Editor from "@monaco-editor/react";
import useActions from "../states/Actions";
// import useVeiwer from "../states/Viewer";
import { useState } from "react";
import Sample from "./Sample";

function Viewer() {
  const File = useActions((state) => state.File);
  const [value, setValue] = useState(File);
  const [isValid, setisValid] = useState(true);
  const handleChange = (newValue) => {
    try {
      JSON.parse(newValue);
      setValue(newValue);
      setisValid(true);
    } catch (e) {
      setisValid(false);
    }
  };
  return (
    <div className="flex-col justify-start">
      <div className="bg-zinc-900 font-spline flex justify-center py-1 text-green-400">
        {isValid ? "✅JSON" : " ❌JSON"}
      </div>
      <Editor
        height="95.5vh"
        // width="28vw"
        defaultLanguage="json"
        theme="vs-dark"
        loading={<div className="font-spline">Loading Editor...</div>}
        defaultValue={JSON.stringify(JSON.parse(Sample), null, 2)}
        value={File && JSON.stringify(File, null, 2)}
        options={{
          // scrollbar: { vertical: "hidden" },
          // overviewRulerBorder: false,
          // overviewRulerLanes: 0,
          minimap: { enabled: false },
        }}
        onChange={(newValue) => handleChange(newValue)}
      ></Editor>
    </div>
  );
}

export default Viewer;
