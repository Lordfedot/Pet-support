import { ReactNode, Dispatch, SetStateAction, useEffect } from "react";
import { IoCloseOutline } from "react-icons/io5";
import {
  BurgerWrapper,
  BurgerLayout,
  BurgerCloseButton,
} from "../styles/components/BurgerMenu.styled";
import Logo from "./Logo";
import { createPortal } from "react-dom";
import { useLocation } from "react-router-dom";

type Props = {
  setBurgerShow: Dispatch<SetStateAction<boolean>>;
  burgerShow: boolean;
  children: ReactNode;
};

const BurgerMenu = ({children, burgerShow, setBurgerShow }: Props) => {
  const location = useLocation();
  useEffect(()=>{
    setBurgerShow(false)
  },[location, setBurgerShow])
  
  return createPortal(
    <>
      <BurgerLayout burgerShow={burgerShow}>
        <BurgerWrapper>
          <Logo />
          <BurgerCloseButton onClick={() => setBurgerShow(false)}>
            <IoCloseOutline size={"20px"} />
          </BurgerCloseButton>
          {children}
        </BurgerWrapper>
      </BurgerLayout>
    </>,
    document.getElementById("root") as HTMLElement
  );
};

export default BurgerMenu;
