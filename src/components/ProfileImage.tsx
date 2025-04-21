import { useState, ChangeEvent } from "react";
import { svgPhotoEdit } from "./Svgs";
import useAppStore from "../store/useAppStore";

export function ProfileImage() {
  const profileImage = useAppStore((s) => s.profileImage);
  const loadProfileImage = useAppStore((s) => s.loadProfileImage);

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
          onChange={loadProfileImage}
        />
      </div>
    </>
  );
}
