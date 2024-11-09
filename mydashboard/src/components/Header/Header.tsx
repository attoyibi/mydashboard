import { Nav } from "./Nav";
const Header = () => {
  return (
    <header className="bg-white border-b border-gray-200 flex flex-wrap md:justify-start md:flex-nowrap z-50 w-full">
      <Nav />
    </header>
  );
};

export default Header;
