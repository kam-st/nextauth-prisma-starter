import { Navbar } from "@/components/admin-panel/navbar";
import NavBreadcrums from "../nav-breadcrums";

interface ContentLayoutProps {
  title: string;
  children: React.ReactNode;
}

export function ContentLayout({ title, children }: ContentLayoutProps) {
  return (
    <>
      <Navbar title={title} />
      <div className="flex flex-1 flex-col gap-4 p-4 lg:gap-6 lg:p-6">
        <NavBreadcrums
          homeElement={"Home"}
          activeClasses="font-medium"
          capitalizeLinks
        />
        <main className="flex flex-1 rounded-lg border border-none shadow-none min-h-[calc(100vh-64px-64px-32px)] ">
          {children}
        </main>
      </div>
    </>
  );
}
