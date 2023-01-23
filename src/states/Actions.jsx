import create from "zustand";

const useActions = create((set, get) => ({
  File: null,
  FileName: null,
  //function for upload
  handleUpload: (e) => {
    const fileReader = new FileReader();
    fileReader.readAsText(e.target.files[0], "UTF-8");
    const Name = e.target.files[0].name;
    set((state) => ({ FileName: Name }));
    fileReader.onload = (e) => {
      let data = JSON.parse(e.target.result);
      set((state) => ({ File: data }));
    };
    document.getElementById("Upload").value = "";
  },
  //function for download
  handleDownload: () => {
    const jString = `data:text/json;chatset=uft-8,${encodeURIComponent(
      JSON.stringify(get().File)
    )}`;
    const link = document.createElement("a");
    link.href = jString;
    link.download = `${get().FileName}`;
    link.click();
    link.remove();
  },
}));

export default useActions;
