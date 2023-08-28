import { Button } from "@/components/ui/button";
import React from "react";
import { Icon } from "@/components/icons";
import { Settings } from "lucide-react";
import { ThemeToggle } from "./theme-toggle";

function Notifications() {
  return (
    <div className="w-[200px] h-full flex justify-end items-center">
      <Button size="sm" variant="ghost">
        <Settings className="w-5 h-5 text-gray-900 dark:text-white " />
      </Button>
      <Button size="sm" variant="ghost">
        <Settings className="w-5 h-5 text-gray-900 dark:text-white " />
      </Button>
      <Button size="sm" variant="ghost">
        <Settings className="w-5 h-5 text-gray-900 dark:text-white " />
      </Button>
      <ThemeToggle />
    </div>
  );
}

export default Notifications;
