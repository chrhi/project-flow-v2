import Image from "next/image";
import React from "react";
import Navigations from "./Navigations";
import Notifications from "./Notifications";

function Header() {
  return (
    <div className="w-full h-[50px] flex border-b items-center justify-center">
      <div className="container h-full w-full flex justify-between items-center">
        <div className="w-[600px] flex gap-x-4 justify-start items-center">
          <Image
            src="/logo-sonatrach.png"
            alt="logo sonatrach"
            width={40}
            height={40}
          />
          <Navigations />
        </div>
        <Notifications />
      </div>
    </div>
  );
}

export default Header;
