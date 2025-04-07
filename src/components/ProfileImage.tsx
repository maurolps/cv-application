import { useState, ChangeEvent } from "react";
import { svgPhotoEdit } from "./Svgs";

export function ProfileImage() {
  const [profileImage, setProfileImage] = useState<string | null>(null);

  const imageUpload = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];

    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setProfileImage(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <>
      <img
        id="profile-img"
        src={profileImage || "/assets/img-placeholder.png"}
        onError={(e) =>
          ((e.target as HTMLImageElement).src = "/assets/img-placeholder.png")
        }
      />
      <div className="update-photo">
        <label htmlFor="img-file">{svgPhotoEdit}</label>
        <input
          type="file"
          id="img-file"
          accept="image/*"
          onChange={imageUpload}
        />
      </div>
    </>
  );
}
