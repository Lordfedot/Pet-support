import { ReactNode, Dispatch, SetStateAction, useEffect } from "react";
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
  burgerShow: boolean;
  setBurgerShow: Dispatch<SetStateAction<boolean>>;
};

const BurgerMenu = ({ burgerShow, children, setBurgerShow }: Props) => {
  useEffect(() => {
    document.body.style.overflow = burgerShow ? "hidden" : "unset";
  }, [burgerShow]);
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
