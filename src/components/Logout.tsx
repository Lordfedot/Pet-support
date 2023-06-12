import {
  LogoutButton,
  IoLogOutOutlineStyled,
} from "../styles/components/Logout.styled";
import { useAppDispatch } from "../redux/selector";
import { logout } from "../redux/operation";
import { MouseEventHandler } from "react";
import { useNavigate } from "react-router-dom";

const Logout = () => {
  const navigate = useNavigate();
  const dispath = useAppDispatch();

  const handleOnClick: MouseEventHandler<HTMLButtonElement> = () => {
    dispath(logout());
    navigate("/");
  };
  return (
    <LogoutButton onClick={handleOnClick} type="submit">
      <IoLogOutOutlineStyled />
      Log Out
    </LogoutButton>
  );
};

export default Logout;
