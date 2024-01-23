import React, { useState } from "react";
import {svgPhotoEdit} from "../assets/svgs";

export function ProfileImage() {
  const [profileImage, setProfileImage] = useState(null);

  const imageUpload = (e) => {
    const file = e.target.files[0];
    
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setProfileImage(reader.result);
      }
      reader.readAsDataURL(file);
    }
  }

  return (
    <>
      <img 
        id='profile-img'
        src={profileImage || './src/assets/img-placeholder.png'}
        onError={(e) => e.target.src = "./src/assets/img-placeholder.png"}
      />
      <div className="update-photo">
        <label htmlFor="img-file">{svgPhotoEdit}</label>
        <input type="file"
         id="img-file"
         accept="image/*"
         onChange={imageUpload}
        />
      </div>
    </>
  )
}