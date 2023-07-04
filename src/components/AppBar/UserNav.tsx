import {
  UserNavButton,
  RiAccountCircleFillStyled,
  Avatar
} from "../../styles/components/UserNav.styled";
import { useAppSelector } from "../../redux/selector";

const UserNav = () => {
  const { user } = useAppSelector((state) => state.auth);
  
  return (
    <UserNavButton to={"/user"}>
      {!user?.avatar && <RiAccountCircleFillStyled />}
      {user?.avatar && <Avatar src={user?.avatar} alt={user?.name} />}
      {user?.name}
    </UserNavButton>
  );
};

export default UserNav;
