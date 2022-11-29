import React from "react";
import useActions from "../states/Actions";
import upload from "../images/upload.png";

function Upload() {
  const handleUpload = useActions((state) => state.handleUpload);

  return (
    <div>
      <label
        htmlFor="Upload"
        className="bg-emerald-900 rounded font-inter py-2 px-4 m-6 cursor-pointer inline-flex"
      >
        Choose a file
        <img
          className="ml-2"
          src={upload}
          height={25}
          width={25}
          alt="uploadIcon"
        ></img>
      </label>
      <input
        id="Upload"
        type="file"
        multiple={false}
        accept=".json"
        className="invisible hidden"
        onChange={(e) => handleUpload(e)}
      />
    </div>
  );
}

export default Upload;
