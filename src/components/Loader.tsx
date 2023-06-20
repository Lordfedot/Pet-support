import { ThreeCircles } from "react-loader-spinner";
import { LoaderWrapper } from "../styles/components/Loader.styled";
const Loader = () => {
  return (
    <LoaderWrapper>
      <ThreeCircles
        height="200"
        width="200"
        color="#F59256"
        visible={true}
        ariaLabel="three-circles-rotating"
      />
    </LoaderWrapper>
  );
};

export default Loader;
