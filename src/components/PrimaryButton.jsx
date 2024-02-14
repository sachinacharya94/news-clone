import React from "react";

function PrimaryButton({ title, onClick, width }) {
  return (
    <button
      onClick={onClick}
      style={{ width: width }}
      className={`bg-appgreen rounded-lg  py-[8px] text-white hover:bg-appgreenhover `}
    >
      {title}
    </button>
  );
}

export default PrimaryButton;