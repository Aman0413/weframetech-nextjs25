import React from "react";

function Icon({ icon }) {
  return (
    <div
      className={`w-9 h-9 rounded-md flex justify-center items-center border`}
    >
      {icon}
    </div>
  );
}

export default Icon;
