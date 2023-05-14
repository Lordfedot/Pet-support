import { H1 } from "../styles/components/MainTitle.styles";
import { Modal } from "./Modal";
import { useState } from "react";
type Props = {
  children: string;
};

const MainTitle = ({ children }: Props) => {
  const [showModal, setShowModal] = useState(false);
  return (
    <>
      <H1>{children}</H1>
      <button onClick={() => setShowModal(true)}>modal</button>
      <Modal setShowModal= {setShowModal} showModal = {showModal}>g</Modal>
    </>
  );
};

export default MainTitle;
