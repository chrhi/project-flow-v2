import { SignInForm } from "@/components/forms/sign-in";
import React from "react";

function page() {
  return (
    <div className="w-full h-screen flex justify-center gap-x-8 pt-20">
      <SignInForm />
    </div>
  );
}

export default page;
