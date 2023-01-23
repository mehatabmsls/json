import create from "zustand";
import useActions from "./Actions";

const useVeiwer = create((set, get) => ({
  // handleEditorChange: (e) => {
  //   console.log(e);
  //   useActions.setState({ File: e });
  // },
}));

export default useVeiwer;
