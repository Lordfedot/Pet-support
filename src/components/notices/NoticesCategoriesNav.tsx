import {
  NoticesNavWrapper,
  AddPetButton,
  StyledAiOutlinePlus,
  AddPetWrapper,
} from "../../styles/components/NoticesCategoriesNav.styled";

import { Modal } from "../Modal";
import NoticesCategoriesNavList from "./NoticesCategoriesNavList";
import { Mobile, TablerOrDesctop } from "../../helpers/mediaQuery";
import { NoticeModal } from "./NoticeModal";
import { NoticesById } from "./NoticeById";
import { Dispatch, SetStateAction } from "react";
import { INotice } from "../../interfaces/INotice";


type NawListProps = {
  buttonsStateHandler: (chandedButton: string, buttonState: boolean) => void;
  setShowModal: Dispatch<SetStateAction<boolean>>;
  showModal: boolean;
  noticeById: INotice | undefined;
  isNoticeModalOpen: {
    isNoticeOpen: boolean;
    noticeId: string
  };
  setNoticeModalState: Dispatch<
    SetStateAction<{ isNoticeOpen: boolean; noticeId: string }>
  >;
};


const NoticesCategoriesNav = ({
  buttonsStateHandler,
  setShowModal,
  showModal,
  noticeById,
  isNoticeModalOpen,
  setNoticeModalState,
}: NawListProps) => {
  return (
    <div>
      <NoticesNavWrapper>
        <NoticesCategoriesNavList buttonsStateHandler={buttonsStateHandler} />

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
        <NoticeModal
          setShowModal={setNoticeModalState}
          showModal={isNoticeModalOpen.isNoticeOpen}
        >
          {noticeById && <NoticesById data={noticeById}></NoticesById>}
        </NoticeModal>
      </NoticesNavWrapper>
    </div>
  );
};

export default NoticesCategoriesNav;
