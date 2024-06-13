import Navbar from "./_components/navbar";

type ProtectedLayoutProps = {
  children: React.ReactNode;
};

const ProtectedLayout = ({ children }: ProtectedLayoutProps) => {
  return (
    <div className="container min-h-screen flex flex-col space-y-6 items-center ">
      <Navbar />
      {children}
    </div>
  );
};

export default ProtectedLayout;
