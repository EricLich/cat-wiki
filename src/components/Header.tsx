import { Link } from "react-router-dom";
import Logo from "../assets/images/catwiki-logo.svg";

const Header = () => {
  return (
    <header className="h-[100px] flex items-center justify-start">
      <Link to={"/"}>
        <img
          src={Logo}
          alt="catwiki logo"
          loading="eager"
          className="lg:w-[128px] lg:h-[43px]"
        />
      </Link>
    </header>
  );
};

export default Header;
