import {
  NoticesNavWrapper,
  AddPetButton,
  StyledAiOutlinePlus,
  AddPetWrapper,
} from "../styles/components/NoticesCategoriesNav.styled";
import { useState } from "react";
import { Modal } from "./Modal";
import NoticesCategoriesNavList from "./NoticesCategoriesNavList";
import { Mobile, TablerOrDesctop } from "../helpers/mediaQuery";
const NoticesCategoriesNav = () => {
  const [showModal, setShowModal] = useState(false);

  return (
    <NoticesNavWrapper>
      <NoticesCategoriesNavList />

      <TablerOrDesctop>
        <AddPetWrapper>
          <p>Add pet</p>
          <AddPetButton onClick={() => setShowModal(true)}>
            <StyledAiOutlinePlus />
          </AddPetButton>
        </AddPetWrapper>
      </TablerOrDesctop>

      <Mobile>
        <AddPetButton onClick={() => setShowModal(true)}>
          <StyledAiOutlinePlus />
          Add pet
        </AddPetButton>
      </Mobile>
      <Modal setShowModal={setShowModal} showModal={showModal}>
        g
      </Modal>
    </NoticesNavWrapper>
  );
};

export default NoticesCategoriesNav;
