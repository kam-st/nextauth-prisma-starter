import { ContentLayout } from "@/components/admin-panel/content-layout";

type ProtectedLayoutProps = {
  children: React.ReactNode;
};

const PageLayout = ({ children }: ProtectedLayoutProps) => {
  return <ContentLayout title="Users">{children}</ContentLayout>;
};

export default PageLayout;
