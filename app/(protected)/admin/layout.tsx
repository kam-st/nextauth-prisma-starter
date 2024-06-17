import { ContentLayout } from "@/components/admin-panel/content-layout";
import NavBreadcrums from "@/components/nav-breadcrums";

type ProtectedLayoutProps = {
  children: React.ReactNode;
};

const PageLayout = ({ children }: ProtectedLayoutProps) => {
  return <ContentLayout title="Admin">{children}</ContentLayout>;
};

export default PageLayout;
