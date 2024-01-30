const svgPersonal = (
  <svg
    width="30px"
    style={{ fill: "var(--primary-color)" }}
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
  >
    <title>Personal Info</title>
    <path
      d="M12 3C14.21 3 16 4.79 16 7S14.21 11 12 11 8 9.21 8 7 9.79 3 12
      3M16 13.54C16 14.6 15.72 17.07 13.81 19.83L13 15L13.94 13.12C13.32 13.05
      12.67 13 12 13S10.68 13.05 10.06 13.12L11 15L10.19 19.83C8.28 17.07 8 14.6
      8 13.54C5.61 14.24 4 15.5 4 17V21H20V17C20 15.5 18.4 14.24 16 13.54Z"
    />
  </svg>
);

const svgSkills = (
  <svg
    width="25px"
    style={{ fill: "var(--primary-color)" }}
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
  >
    <title>Skills</title>
    <path
      d="
      M13.78 15.3L19.78 21.3L21.89 19.14L15.89 13.14L13.78 15.3M17.5
      10.1C17.11 10.1 16.69 10.05 16.36 9.91L4.97 21.25L2.86 19.14L10.27
      11.74L8.5 9.96L7.78 10.66L6.33 9.25V12.11L5.63 12.81L2.11 9.25L2.81
      8.55H5.62L4.22 7.14L7.78 3.58C8.95 2.41 10.83 2.41 12 3.58L9.89
      5.74L11.3 7.14L10.59 7.85L12.38 9.63L14.2 7.75C14.06 7.42 14 7 14
      6.63C14 4.66 15.56 3.11 17.5 3.11C18.09 3.11 18.61 3.25 19.08
      3.53L16.41 6.2L17.91 7.7L20.58 5.03C20.86 5.5 21 6 21 6.63C21 8.55
      19.45 10.1 17.5 10.1Z
      "
    />
  </svg>
);

const svgEdu = (
  <svg
    width="25px"
    style={{ fill: "var(--primary-color)" }}
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
  >
    <title>Education</title>
    <path
      d="M12,3L1,9L12,15L21,10.09V17H23V9M5,13.18V17.18L12,21L19,
      17.18V13.18L12,17L5,13.18Z"
    />
  </svg>
);

const svgExp = (
  <svg
    width="25px"
    style={{ fill: "var(--primary-color)" }}
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
  >
    <title>Work Experience</title>
    <path
      d="M10,2H14A2,2 0 0,1 16,4V6H20A2,2 0 0,1 22,8V19A2,2 0 0,1 20,21H4C2.89,
      21 2,20.1 2,19V8C2,6.89 2.89,6 4,6H8V4C8,2.89 8.89,2 10,2M14,6V4H10V6H14Z"
    />
  </svg>
);

const svgArrowDown = (
  <svg
    width="20px"
    style={{ fill: "var(--text-color)" }}
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
  >
    <title>Expand</title>
    <path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" />
  </svg>
);

const svgArrowUp = (
  <svg
    width="20px"
    style={{ fill: "var(--text-color)" }}
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
  >
    <title>Collapse</title>
    <path d="M7.41,15.41L12,10.83L16.59,15.41L18,14L12,8L6,14L7.41,15.41Z" />
  </svg>
);

const svgDownload = (
  <svg
    width="20px"
    fill="white"
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
  >
    <title>Download PDF</title>
    <path
      d="M2 12H4V17H20V12H22V17C22 18.11 21.11 19 20 19H4C2.9 19 2 18.11 2
      17V12M12 15L17.55 9.54L16.13 8.13L13 11.25V2H11V11.25L7.88 8.13L6.46 9.55L12 15Z"
    />
  </svg>
);

const svgAutofill = (
  <svg
    viewBox="0 0 24 24"
    width="20px"
    height="15px"
    fill="white"
    xmlns="http://www.w3.org/2000/svg"
  >
    <title>Auto Fill</title>
    <g>
      <path
        d="M20.71,7.04C21.1,6.65 21.1,6 20.71,5.63L18.37,3.29C18,2.9 
        17.35,2.9 16.96,3.29L15.12,5.12L18.87,8.87M3,17.25V21H6.75L17.81,9.93L14.06,6.18L3,17.25Z"
      />
      <path d="M4,40H24V23H8V40Z" />
    </g>
  </svg>
);

const svgEdit = (
  <svg
    viewBox="0 0 24 24"
    width="15px"
    style={{ fill: "var(--small-icons-color)" }}
    xmlns="http://www.w3.org/2000/svg"
  >
    <title>Edit</title>
    <path
      d="M20.71,7.04C21.1,6.65 21.1,6 20.71,5.63L18.37,3.29C18,2.9 17.35,2.9 
      16.96,3.29L15.12,5.12L18.87,8.87M3,17.25V21H6.75L17.81,9.93L14.06,6.18L3,17.25Z"
    />
  </svg>
);

const svgTrash = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="20px"
    style={{ fill: "var(--small-icons-color)" }}
    viewBox="0 0 24 24"
  >
    <title>Clear All</title>
    <path
      d="M9,3V4H4V6H5V19A2,2 0 0,0 7,21H17A2,2 0 0,0 
      19,19V6H20V4H15V3H9M7,6H17V19H7V6M9,8V17H11V8H9M13,8V17H15V8H13Z"
    />
  </svg>
);

const svgPhotoEdit = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="16px"
    style={{ fill: "var(--primary-color)" }}
    viewBox="0 0 24 24"
  >
    <title>Change Photo</title>
    <path
      d="M4,4H7L9,2H15L17,4H20A2,2 0 0,1 22,6V18A2,2 0 0,1 20,20H4A2,2 0 0,1 2,18V6A2,2 0
      0,1 4,4M12,7A5,5 0 0,0 7,12A5,5 0 0,0 12,17A5,5 0 0,0 17,12A5,5 0 0,0 12,7M12,9A3,3 0 0,1
      15,12A3,3 0 0,1 12,15A3,3 0 0,1 9,12A3,3 0 0,1 12,9Z"
    />
  </svg>
);

const svgAdd = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="30px"
    style={{ fill: "var(--primary-color)" }}
    viewBox="0 0 24 24"
  >
    <title>Add new item</title>
    <path
      d="M12,20C7.59,20 4,16.41 4,12C4,7.59 7.59,4 12,4C16.41,4 20,7.59
      20,12C20,16.41 16.41,20 12,20M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 
      0 0,0 12,2M13,7H11V11H7V13H11V17H13V13H17V11H13V7Z"
    />
  </svg>
);

const svgMoon = (
  <svg
    version="1.1"
    className="moon"
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
    x="0px"
    y="0px"
    viewBox="0 0 49.739 49.739"
    style={{ enableBackground: "new 0 0 49.739 49.739" }}
    xmlSpace="preserve"
  >
    <path
      d="M25.068,48.889c-9.173,0-18.017-5.06-22.396-13.804C-3.373,23.008,1.164,8.467,13.003,1.979l2.061-1.129l-0.615,2.268
c-1.479,5.459-0.899,11.25,1.633,16.306c2.75,5.493,7.476,9.587,13.305,11.526c5.831,1.939,12.065,1.492,17.559-1.258v0
c0.25-0.125,0.492-0.258,0.734-0.391l2.061-1.13l-0.585,2.252c-1.863,6.873-6.577,12.639-12.933,15.822
C32.639,48.039,28.825,48.888,25.068,48.889z M12.002,4.936c-9.413,6.428-12.756,18.837-7.54,29.253
c5.678,11.34,19.522,15.945,30.864,10.268c5.154-2.582,9.136-7.012,11.181-12.357c-5.632,2.427-11.882,2.702-17.752,0.748
c-6.337-2.108-11.473-6.557-14.463-12.528C11.899,15.541,11.11,10.16,12.002,4.936z"
    />
  </svg>
);

const svgSun = (
  <svg
    version="1.1"
    className="sun"
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
    x="0px"
    y="0px"
    viewBox="0 0 496 496"
    style={{ enableBackground: "new 0 0 496 496" }}
    xmlSpace="preserve"
  >
    <rect
      x="152.994"
      y="58.921"
      transform="matrix(0.3827 0.9239 -0.9239 0.3827 168.6176 -118.5145)"
      width="40.001"
      height="16"
    />
    <rect
      x="46.9"
      y="164.979"
      transform="matrix(0.9239 0.3827 -0.3827 0.9239 71.29 -12.4346)"
      width="40.001"
      height="16"
    />
    <rect
      x="46.947"
      y="315.048"
      transform="matrix(0.9239 -0.3827 0.3827 0.9239 -118.531 50.2116)"
      width="40.001"
      height="16"
    />

    <rect
      x="164.966"
      y="409.112"
      transform="matrix(-0.9238 -0.3828 0.3828 -0.9238 168.4872 891.7491)"
      width="16"
      height="39.999"
    />

    <rect
      x="303.031"
      y="421.036"
      transform="matrix(-0.3827 -0.9239 0.9239 -0.3827 50.2758 891.6655)"
      width="40.001"
      height="16"
    />

    <rect
      x="409.088"
      y="315.018"
      transform="matrix(-0.9239 -0.3827 0.3827 -0.9239 701.898 785.6559)"
      width="40.001"
      height="16"
    />

    <rect
      x="409.054"
      y="165.011"
      transform="matrix(-0.9239 0.3827 -0.3827 -0.9239 891.6585 168.6574)"
      width="40.001"
      height="16"
    />
    <rect
      x="315.001"
      y="46.895"
      transform="matrix(0.9238 0.3828 -0.3828 0.9238 50.212 -118.5529)"
      width="16"
      height="39.999"
    />
    <path
      d="M248,88c-88.224,0-160,71.776-160,160s71.776,160,160,160s160-71.776,160-160S336.224,88,248,88z M248,392
     c-79.4,0-144-64.6-144-144s64.6-144,144-144s144,64.6,144,144S327.4,392,248,392z"
    />
    <rect x="240" width="16" height="72" />
    <rect
      x="62.097"
      y="90.096"
      transform="matrix(0.7071 0.7071 -0.7071 0.7071 98.0963 -40.6334)"
      width="71.999"
      height="16"
    />
    <rect y="240" width="72" height="16" />

    <rect
      x="90.091"
      y="361.915"
      transform="matrix(-0.7071 -0.7071 0.7071 -0.7071 -113.9157 748.643)"
      width="16"
      height="71.999"
    />
    <rect x="240" y="424" width="16" height="72" />

    <rect
      x="361.881"
      y="389.915"
      transform="matrix(-0.7071 -0.7071 0.7071 -0.7071 397.8562 960.6281)"
      width="71.999"
      height="16"
    />
    <rect x="424" y="240" width="72" height="16" />
    <rect
      x="389.911"
      y="62.091"
      transform="matrix(0.7071 0.7071 -0.7071 0.7071 185.9067 -252.6357)"
      width="16"
      height="71.999"
    />
  </svg>
);

export {
  svgPersonal,
  svgEdu,
  svgSkills,
  svgExp,
  svgArrowDown,
  svgArrowUp,
  svgDownload,
  svgAutofill,
  svgTrash,
  svgAdd,
  svgEdit,
  svgPhotoEdit,
  svgSun,
  svgMoon,
};
