import { Nav } from "./Nav";

const Header = () => {
  return (
    <header className="bg-white border-b border-gray-200 flex flex-wrap md:justify-start md:flex-nowrap z-50 w-full fixed top-0 left-0 right-0 shadow-md">
      <Nav />
    </header>
  );
};

export default Header;
