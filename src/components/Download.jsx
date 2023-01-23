import React from "react";
import useActions from "../states/Actions";
import save from "../images/save.png";
import { BsDownload } from "react-icons/bs";

function Download() {
  const handleDownload = useActions((state) => state.handleDownload);

  return (
    <div>
      <button
        className="font-inter py-1 px-2  my-3 cursor-pointer inline-flex text-zinc-300"
        onClick={handleDownload}
      >
        {/* <img
          className=""
          src={save}
          height={28}
          width={28}
          alt="saveIcon"
        ></img> */}
        <BsDownload className="text-slate-300" size={26}></BsDownload>
      </button>
    </div>
  );
}

export default Download;
