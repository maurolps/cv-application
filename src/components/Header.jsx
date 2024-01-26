import "../styles/header.css"
import DarkMode from "./DarkMode"
import { svgAutofill, svgTrash }  from '../assets/svgs'
import { defaultData, exampleData, expData, eduData } from "./Data"

export function Header(props) {
  const {setFieldsData, setUpdateExp, setUpdateEdu, setAddingExp, setAddingEdu} = props;

  return (
    <>
      <div className="logo">
        <p>CV APP</p>
        <DarkMode />
      </div>
      <div className="card-actions">
            <button className="btn-autofill" onClick={() => {
              setFieldsData(exampleData);
              setUpdateExp(expData);
              setUpdateEdu(eduData);
              setTimeout(() => {
                const profileImg = document.getElementById('profile-img');
                profileImg.src = "./src/assets/john-doe.png";      
              }, 300);
            }}>Auto Fill {svgAutofill}</button>
            <button onClick={() => {
              setFieldsData(defaultData);
              setAddingExp(false);
              setAddingEdu(false);
              setUpdateExp(null);
              setUpdateEdu(null);
            }}>{svgTrash}</button>
          </div>
    </>
  )
}