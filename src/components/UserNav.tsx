import {
  UserNavButton,
  RiAccountCircleFillStyled,
} from "../styles/components/UserNav.styled";
import { useAppSelector } from "../redux/selector";

const UserNav = () => {
  const { user } = useAppSelector((state) => state.auth);

  return (
    <UserNavButton to={"/user"}>
      <RiAccountCircleFillStyled />
      {user?.name}
    </UserNavButton>
  );
};

export default UserNav;
