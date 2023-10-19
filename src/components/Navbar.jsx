import Logo from "./Logo";
import Navlinks from "./Navlinks";

function Navbar() {
  return (
    <div className="bg-primaryColor flex items-center gap-x-[342px] px-8 py-6 text-white">
      <Logo />
      <Navlinks />
    </div>
  );
}

export default Navbar;
