import { Link } from "react-router-dom";
import { FirstColor, SecondColor } from "../styles/components/Logo.styled";

const Logo = () => {
  return (
    <Link to={'/'}>
      <FirstColor>
        pet<SecondColor>l</SecondColor>y
      </FirstColor>
    </Link>
  );
};

export default Logo;
