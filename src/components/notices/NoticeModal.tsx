import {
  ModalBackdrop,
  ModalContent,
  CloseButton,
} from "../../styles/components/Modal.style";
import { ReactNode } from "react";
import { Dispatch, SetStateAction } from "react";
import { useEffect, useCallback } from "react";
import { IoCloseOutline } from "react-icons/io5";
import { createPortal } from "react-dom";

type Props = {
  children: ReactNode;
  showModal: boolean;
  setShowModal: Dispatch<
    SetStateAction<{ isNoticeOpen: boolean; noticeId: string }>
  >;
};

export const NoticeModal = ({ children, showModal, setShowModal }: Props) => {
  useEffect(() => {
    document.body.style.overflow = showModal ? "hidden" : "unset";
  }, [showModal]);
  const hadnleOnEscapeClose = useCallback(
    (e: KeyboardEvent) => {
      if (e.code === "Escape") {
        setShowModal({ isNoticeOpen: false, noticeId: "" });
      }
    },
    [setShowModal]
  );

  useEffect(() => {
    document.body.addEventListener("keydown", hadnleOnEscapeClose);
    return () => {
      document.body.removeEventListener("keydown", hadnleOnEscapeClose);
    };
  }, [hadnleOnEscapeClose]);
  if (!showModal) {
    return null;
  }
  return createPortal(
    <ModalBackdrop
      onClick={() => setShowModal({ isNoticeOpen: false, noticeId: "" })}
    >
      <ModalContent onClick={(e) => e.stopPropagation()}>
        <CloseButton
          onClick={() => setShowModal({ isNoticeOpen: false, noticeId: "" })}
        >
          <IoCloseOutline size={"20px"} color="inherit" />
        </CloseButton>

        {children}
      </ModalContent>
    </ModalBackdrop>,
    document.getElementById("root") as HTMLElement
  );
};
