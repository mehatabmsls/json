import React from "react";
import Download from "./components/Download";
import Upload from "./components/Upload";
import useActions from "./states/Actions";

function App() {
  const File = useActions((state) => state.File);
  return (
    <div className="text-white">
      <section className="flex justify-between">
        <Upload></Upload>
        {File && <Download></Download>}
      </section>
    </div>
  );
}

export default App;
