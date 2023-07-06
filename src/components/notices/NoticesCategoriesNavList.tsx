import { useState, Dispatch, SetStateAction } from "react";
import { Button } from "../../styles/components/Button.styled";
import { NoticesNavList } from "../../styles/components/NoticesCategoriesNavList.styled";
type ButtonProps = {
  children: string;
  buttonsStateHandler: (chandedButton: string) => void;
  setActive: Dispatch<SetStateAction<string>>;
  isActive: boolean;
};

type ListProps = {
  buttonsStateHandler: (chandedButton: string) => void;
  isAuthenticated: boolean;
};

const CategoriesButton = ({ children, buttonsStateHandler, setActive, isActive }: ButtonProps) => {

  const toggleCLass = isActive ? "active" : null;

  const clickHandler = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    if (e.currentTarget.textContent !== null) {
      buttonsStateHandler(e.currentTarget.textContent);
      setActive(e.currentTarget.textContent);
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
  const [isActive, setActive] = useState("sell");
  return (
    <NoticesNavList>
      <li>
        <CategoriesButton
          buttonsStateHandler={buttonsStateHandler}
          setActive={setActive}
          isActive={isActive === "sell" ? true : false}
        >
          sell
        </CategoriesButton>
      </li>
      <li>
        <CategoriesButton
          buttonsStateHandler={buttonsStateHandler}
          setActive={setActive}
          isActive={isActive === "lost/found" ? true : false}
        >
          lost/found
        </CategoriesButton>
      </li>
      <li>
        <CategoriesButton
          buttonsStateHandler={buttonsStateHandler}
          setActive={setActive}
          isActive={isActive === "in good hands" ? true : false}
        >
          in good hands
        </CategoriesButton>
      </li>
      {isAuthenticated && (
        <>
          <li>
            <CategoriesButton
              buttonsStateHandler={buttonsStateHandler}
              setActive={setActive}
              isActive={isActive === "my adds" ? true : false}
            >
              my adds
            </CategoriesButton>
          </li>
          <li>
            <CategoriesButton
              buttonsStateHandler={buttonsStateHandler}
              setActive={setActive}
              isActive={isActive === "favourite adds" ? true : false}
            >
              favourite adds
            </CategoriesButton>
          </li>
        </>
      )}
    </NoticesNavList>
  );
};

export default NoticesCategoriesNavList;
