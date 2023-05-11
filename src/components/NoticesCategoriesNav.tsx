import {
  NoticesNavList,
  NoticesNavButton,
} from "../styles/components/NoticesCategoriesNav.styled";
import { useState } from "react";

type Props = {
  children: string;
};

const Button = ({ children }: Props) => {
  const [isActive, setIsActive] = useState(false);

  const toggleCLass = isActive ? "active" : null;

  return (
    <NoticesNavButton
      onClick={() => setIsActive(!isActive)}
      className={`${toggleCLass}`}
      type="button"
    >
      {children}
    </NoticesNavButton>
  );
};

const NoticesCategoriesNav = () => {
  return (
    <NoticesNavList>
      <li>
        <Button>sell</Button>
      </li>
      <li>
        <Button>lost/found</Button>
      </li>
      <li>
        <Button>in good hands</Button>
      </li>
    </NoticesNavList>
  );
};

export default NoticesCategoriesNav;
