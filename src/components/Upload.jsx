import React from "react";
import useActions from "../states/Actions";
// import upload from "../images/upload.png";
import { BsCloudUpload } from "react-icons/bs";

function Upload() {
  const handleUpload = useActions((state) => state.handleUpload);

  return (
    <div>
      <label
        htmlFor="Upload"
        className="font-inter px-2 my-3 cursor-pointer inline-flex text-zinc-300"
      >
        {/* <img
          className=""
          src={upload}
          height={30}
          width={30}
          alt="uploadIcon"
        ></img> */}
        <BsCloudUpload
          className="mt-6 text-slate-300"
          size={28}
        ></BsCloudUpload>
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
