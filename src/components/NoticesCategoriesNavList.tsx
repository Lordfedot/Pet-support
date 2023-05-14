import { useState } from "react";
import { Button } from "../styles/components/Button.styled";
import { NoticesNavList } from "../styles/components/NoticesCategoriesNavList.styled";
type Props = {
    children: string;
  };

const CategoriesButton = ({ children }: Props) => {
    const [isActive, setIsActive] = useState(false);
  
    const toggleCLass = isActive ? "active" : null;
  
    return (
      <Button
        onClick={() => setIsActive(!isActive)}
        className={`${toggleCLass}`}
        type="button"
      >
        {children}
      </Button>
    );
  };

const NoticesCategoriesNavList = () => {
    return (
        <NoticesNavList>
        <li>
          <CategoriesButton>sell</CategoriesButton>
        </li>
        <li>
          <CategoriesButton>lost/found</CategoriesButton>
        </li>
        <li>
          <CategoriesButton>in good hands</CategoriesButton>
        </li>
      </NoticesNavList>
    )
}

export default NoticesCategoriesNavList