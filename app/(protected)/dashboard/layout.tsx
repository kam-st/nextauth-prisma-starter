import { ContentLayout } from "@/components/admin-panel/content-layout";

type ProtectedLayoutProps = {
  children: React.ReactNode;
};

const PageLayout = ({ children }: ProtectedLayoutProps) => {
  return <ContentLayout title="Dashboard">{children}</ContentLayout>;
};

export default PageLayout;
