import { H1 } from "../styles/components/MainTitle.styles";

type Props = {
  children: string;
};

const MainTitle = ({ children }: Props) => {
  return (
    <>
      <H1>{children}</H1>
    </>
  );
};

export default MainTitle;
