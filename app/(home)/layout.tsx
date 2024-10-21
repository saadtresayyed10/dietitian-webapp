import MobileNavbar from "./_components/MobileNavbar";
import Navbar from "./_components/Navbar";

const HomeLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <Navbar />
      <header className="sticky top-0 z-50">
        <MobileNavbar />
      </header>
      <main>{children}</main>
      <footer></footer>
    </>
  );
};

export default HomeLayout;
