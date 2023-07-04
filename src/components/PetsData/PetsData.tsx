import { Dispatch, SetStateAction, useState } from "react";
import {
  AddPetButton,
  StyledAiOutlinePlus,
  PetsDataWrapper,
  AddPetButtonWrapper,
  PetsWrapper
} from "../../styles/components/PetsData.styled";
import { Modal } from "../Modal";
import { Pet } from "../../interfaces/Pet";
import PetsList from "./PetsList";
import ModalAddPets from "../ModalAddPets/ModalsAddPets";
type Props = {
  pets: Pet[];
  setPets: Dispatch<SetStateAction<Pet[]>>
};

const PetsData = ({ pets, setPets }: Props) => {
  const [showModal, setShowModal] = useState(false);

  if (!pets) return <></>;
  return (
    <PetsWrapper>
      <PetsDataWrapper>
        <h2>My pets:</h2>
        <AddPetButtonWrapper>
          <p>Add pet</p>
          <AddPetButton onClick={() => setShowModal(true)}>
            <StyledAiOutlinePlus />
          </AddPetButton>
        </AddPetButtonWrapper>
      </PetsDataWrapper>
      <PetsList setPets={setPets} pets={pets} />
      <Modal setShowModal={setShowModal} showModal={showModal}>
        <ModalAddPets setPets={setPets} setShowModal={setShowModal}/>
      </Modal>
    </PetsWrapper>
  );
};

export default PetsData;
