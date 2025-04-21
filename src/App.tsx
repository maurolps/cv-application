import { Header } from "./components/Header";
import { Personal } from "./components/Personal";
import { Experience } from "./components/Experience";
import { Education } from "./components/Education";
import { LoadCard } from "./components/LoadCard";
import { Preview } from "./components/Preview";
import { Skills } from "./components/Skills";
import {
  svgPersonal,
  svgExp,
  svgEdu,
  svgDownload,
  svgSkills,
  svgGithub,
} from "./components/Svgs";
import "./App.css";
import { PdfOptions } from "@Types/app";
import { ViewPDF } from "./components/pdf/viewPDF";

const pdfOptions: PdfOptions = {
  method: "open",
};

function App() {
  return (
    <>
      <main>
        <div className="container">
          <header>
            <Header />
          </header>

          <LoadCard
            title="Personal Details"
            svg={svgPersonal}
            component={Personal}
          />

          <LoadCard title="Skills" svg={svgSkills} component={Skills} />

          <LoadCard
            title="Work Experience"
            svg={svgExp}
            component={Experience}
          />

          <LoadCard title="Education" svg={svgEdu} component={Education} />
        </div>
        <div className="preview-wrapper">
          <Preview />
          <div className="action">
            <ViewPDF />
          </div>
        </div>
      </main>
      <footer>
        {svgGithub}{" "}
        <a href="https://github.com/maurolps/cv-application">maurolps</a>
      </footer>
    </>
  );
}

export default App;
