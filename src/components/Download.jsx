import React from "react";
import useActions from "../states/Actions";
import save from "../images/save.png";

function Download() {
  const handleDownload = useActions((state) => state.handleDownload);

  return (
    <div>
      <button
        className="bg-emerald-900 rounded font-inter py-2 px-4 m-6 cursor-pointer inline-flex"
        onClick={handleDownload}
      >
        Save
        <img
          className="ml-2"
          src={save}
          height={25}
          width={25}
          alt="saveIcon"
        ></img>
      </button>
    </div>
  );
}

export default Download;
