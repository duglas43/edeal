import React from "react";

const Header: React.FC = () => {
  return (
    <div className="w-100 h-16 bg-red-400 flex items-center">
      <div className="container p-2 sm:p-0   mx-auto">
        <div className="logo text-white  text-3xl ">Roga & Kopyta Inc</div>
      </div>
    </div>
  );
};

export default Header;
