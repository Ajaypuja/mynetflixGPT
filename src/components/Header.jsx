import React from "react";

const Header = () => {
  return (
    <div className=" absolute top-0 left-0 w-full h-16 flex items-center justify-between px-40 pt-10 bg-gradient-to-b from-black z-10 ">
      <img
        src="https://logosarchive.com/wp-content/uploads/2021/07/Netflix-logo.svg"
        alt="" width={170} height={80}
      />
    </div>
  );
};

export default Header;
