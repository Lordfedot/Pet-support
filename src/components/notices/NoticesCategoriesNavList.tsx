import { useState } from "react";
import { Button } from "../../styles/components/Button.styled";
import { NoticesNavList } from "../../styles/components/NoticesCategoriesNavList.styled";
type ButtonProps = {
  children: string;
  buttonsStateHandler: (chandedButton: string, buttonState: boolean) => void;
};

type ListProps = {
  buttonsStateHandler: (chandedButton: string, buttonState: boolean) => void;
  isAuthenticated: boolean;
};

const CategoriesButton = ({ children, buttonsStateHandler }: ButtonProps) => {
  const [isActive, setIsActive] = useState(false);

  const toggleCLass = isActive ? "active" : null;

  const clickHandler = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    setIsActive(!isActive);
    if (e.currentTarget.textContent !== null) {
      buttonsStateHandler(e.currentTarget.textContent, !isActive);
    }
  };

  return (
    <Button onClick={clickHandler} className={`${toggleCLass}`} type="button">
      {children}
    </Button>
  );
};

const NoticesCategoriesNavList = ({
  buttonsStateHandler,
  isAuthenticated,
}: ListProps) => {
  const [isActive, setActive] = useState({})
  return (
    <NoticesNavList>
      <li>
        <CategoriesButton buttonsStateHandler={buttonsStateHandler}>
          sell
        </CategoriesButton>
      </li>
      <li>
        <CategoriesButton buttonsStateHandler={buttonsStateHandler}>
          lost/found
        </CategoriesButton>
      </li>
      <li>
        <CategoriesButton buttonsStateHandler={buttonsStateHandler}>
          in good hands
        </CategoriesButton>
      </li>
      {isAuthenticated && (
        <>
          <li>
            <CategoriesButton buttonsStateHandler={buttonsStateHandler}>
              my adds
            </CategoriesButton>
          </li>
          <li>
            <CategoriesButton buttonsStateHandler={buttonsStateHandler}>
              favourite adds
            </CategoriesButton>
          </li>
        </>
      )}
    </NoticesNavList>
  );
};

export default NoticesCategoriesNavList;
