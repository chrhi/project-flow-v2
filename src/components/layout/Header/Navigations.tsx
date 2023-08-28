import { Button } from "@/components/ui/button";
import React from "react";

const list = [
  { name: "overview", link: "/" },
  { name: "chat", link: "/" },
  { name: "projects", link: "/" },
  { name: "docs", link: "/" },
];

function Navigations() {
  return (
    <div className="w-[500px] h-full flex items-center gap-x-4 justify-start">
      {list.map((item) => {
        return <Button variant="ghost">{item.name}</Button>;
      })}
    </div>
  );
}

export default Navigations;
