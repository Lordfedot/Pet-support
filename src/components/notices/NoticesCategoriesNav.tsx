import {
  NoticesNavWrapper,
  AddPetButton,
  StyledAiOutlinePlus,
  AddPetWrapper,
} from "../../styles/components/NoticesCategoriesNav.styled";

import { Modal } from "../Modal";
import NoticesCategoriesNavList from "./NoticesCategoriesNavList";
import { Mobile, TablerOrDesctop } from "../../helpers/mediaQuery";
import { NoticesById } from "./NoticeById";
import { Dispatch, SetStateAction } from "react";
import { INotice } from "../../interfaces/INotice";
import { NoticesAddForm } from "./NoticeAddForm";


type NawListProps = {
  buttonsStateHandler: (chandedButton: string) => void;
  setShowModal: Dispatch<SetStateAction<boolean>>;
  showModal: boolean;
  noticeById: INotice | undefined;
  isNoticeModalOpen: boolean;
  isAuthenticated: boolean;
  setNoticeModalState: Dispatch<SetStateAction<boolean>>;
  onFavouriteChange: (id: string) => void;
  onDelete: (id: string) => void;
};

const NoticesCategoriesNav = ({
  buttonsStateHandler,
  setShowModal,
  showModal,
  noticeById,
  isNoticeModalOpen,
  isAuthenticated,
  setNoticeModalState,
  onFavouriteChange,
  onDelete,
}: NawListProps) => {
  return (
    <div>
      <NoticesNavWrapper>
        <NoticesCategoriesNavList
          buttonsStateHandler={buttonsStateHandler}
          isAuthenticated={isAuthenticated}
        />

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
          <NoticesAddForm setShowModal={setShowModal}></NoticesAddForm>
        </Modal>
        <Modal setShowModal={setNoticeModalState} showModal={isNoticeModalOpen}>
          {noticeById && (
            <NoticesById
              onDelete = {onDelete}
              onFavouriteChange={onFavouriteChange}
              data={noticeById}
              isAuthenticated={isAuthenticated}
              setShowModal={setNoticeModalState}
            ></NoticesById>
          )}
        </Modal>
      </NoticesNavWrapper>
    </div>
  );
};

export default NoticesCategoriesNav;
