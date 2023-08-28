import Header from "@/components/layout/Header";
import { Suspense } from "react";

export default function AppLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Header />
      <Suspense>
        <div className="container">{children}</div>
      </Suspense>
    </>
  );
}
