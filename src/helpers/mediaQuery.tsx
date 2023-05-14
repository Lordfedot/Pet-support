import { ReactNode } from "react";
import { useMediaQuery } from "react-responsive";

type Props = {
  children: ReactNode;
};

export const Desktop = ({ children }: Props) => {
  const isDesktop = useMediaQuery({ minWidth: 1280 });
  return <>{isDesktop ? children : null}</>;
};
export const Tablet = ({ children }: Props) => {
  const isTablet = useMediaQuery({ minWidth: 768, maxWidth: 1279 });
  return <>{isTablet ? children : null}</>;
};
export const Mobile = ({ children }: Props) => {
  const isMobile = useMediaQuery({ minWidth: 320, maxWidth: 767 });
  return <>{isMobile ? children : null}</>;
};
