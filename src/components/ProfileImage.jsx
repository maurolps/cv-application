import React from "react";
import {svgPhotoEdit} from "../assets/svgs";

export function ProfileImage() {

  return (
    <>
      <img src="" onError={(e) => e.target.src = "./src/assets/img-placeholder.png"} />
      <label htmlFor="img-file">{svgPhotoEdit}</label>
      <input type="file"
       id="img-file"
       accept="image/*"
      />
    </>
  )
}