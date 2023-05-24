import { ReactNode, Dispatch, SetStateAction } from "react";
import { IoCloseOutline } from "react-icons/io5";
import {
  BurgerWrapper,
  BurgerLayout,
  BurgerCloseButton,
} from "../styles/components/BurgerMenu.styled";
import Logo from "./Logo";
import { createPortal } from "react-dom";

type Props = {
  children: ReactNode;
  setBurgerShow: Dispatch<SetStateAction<boolean>>;
};

const BurgerMenu = ({ children, setBurgerShow }: Props) => {

  return createPortal(
    <BurgerWrapper>
      <BurgerLayout>
        <BurgerWrapper>
          <Logo />

          <BurgerCloseButton onClick={() => setBurgerShow(false)}>
            <IoCloseOutline size={"20px"} />
          </BurgerCloseButton>
        </BurgerWrapper>
        {children}
      </BurgerLayout>
    </BurgerWrapper>,
    document.getElementById("root") as HTMLElement
  );
};

export default BurgerMenu;
