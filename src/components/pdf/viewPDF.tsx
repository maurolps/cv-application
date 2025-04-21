import { pdf } from "@react-pdf/renderer";
import { PdfDocument } from "./PdfDocument";
import useAppStore from "../../store/useAppStore";
import { svgDownload } from "../Svgs";

const handleView = async () => {
  const state = useAppStore.getState();
  localStorage.setItem("cvState", JSON.stringify(state));
  const blob = await pdf(<PdfDocument state={state} />).toBlob();
  const url = URL.createObjectURL(blob);
  window.open(url);
};

export const ViewPDF = () => (
  <button className="btn-download" onClick={handleView}>
    {svgDownload} View PDF
  </button>
);
