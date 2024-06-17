import AdminPanelLayout from "@/components/admin-panel/admin-panel-layout";
import { Navbar } from "@/components/admin-panel/navbar";

type ProtectedLayoutProps = {
  children: React.ReactNode;
};

const ProtectedLayout = ({ children }: ProtectedLayoutProps) => {
  return <AdminPanelLayout>{children}</AdminPanelLayout>;
};

export default ProtectedLayout;
