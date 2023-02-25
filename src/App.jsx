import React from "react";
import Download from "./components/Download";
import Upload from "./components/Upload";
import Viewer from "./components/Viewer";
import useActions from "./states/Actions";
import { Allotment } from "allotment";
import "allotment/dist/style.css";
import Chart from "./components/Chart";
import { TransformWrapper, TransformComponent } from "react-zoom-pan-pinch";

function App() {
  return (
    <>
      <div className=" text-white flex">
        <section className="bg-zinc-800 flex-col border-r-[1px] border-zinc-600">
          <Upload></Upload>
          {File && <Download></Download>}
        </section>
        <div className="container">
          <Allotment defaultSizes={[300, 1000]}>
            <Allotment.Pane minSize={420} maxSize={620}>
              <Viewer></Viewer>
            </Allotment.Pane>
            <Allotment.Pane>
              <TransformWrapper>
                <TransformComponent>
                  <Chart></Chart>
                </TransformComponent>
              </TransformWrapper>
            </Allotment.Pane>
          </Allotment>
        </div>
      </div>
    </>
  );
}

export default App;
