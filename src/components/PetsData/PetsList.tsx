import { Dispatch, SetStateAction } from "react";
import { deletePet } from "../../helpers/Api";
import { Pet } from "../../interfaces/Pet";
import {
  PetsListStyled,
  PetsItem,
  PetImg,
  PetsInfoList,
  PetsInfoItem,
  MdDeleteStyled,
  DeleteButton,
} from "../../styles/components/PetsList.styled";
type Props = {
  pets: Pet[];
  setPets: Dispatch<SetStateAction<Pet[]>>;
};

const PetsList = ({ pets, setPets }: Props) => {
  const handleDelete = async (id: string) => {
    await deletePet(id);
    const updatedPets = pets.filter((pet) => pet._id !== id);
    setPets(updatedPets);
  };
  if (!pets) return <></>;
  return (
    <PetsListStyled>
      {pets.map((pet) => (
        <PetsItem key={pet._id}>
          <PetImg src={pet.photo} alt={pet.name} />
          <PetsInfoList>
            <PetsInfoItem>
              <p>
                <strong>Name:</strong> {pet.name}
              </p>
            </PetsInfoItem>
            <PetsInfoItem>
              <p>
                <strong>Breed:</strong> {pet.breed}
              </p>
            </PetsInfoItem>
            <PetsInfoItem>
              <p>
                <strong>Date of birth:</strong> {pet.dateOfBirth}
              </p>
            </PetsInfoItem>
            <PetsInfoItem>
              <p>
                <strong>Comments:</strong> {pet.comments}
              </p>
            </PetsInfoItem>
          </PetsInfoList>
          <DeleteButton type="button" onClick={() => handleDelete(pet._id)}>
            <MdDeleteStyled />
          </DeleteButton>
        </PetsItem>
      ))}
    </PetsListStyled>
  );
};

export default PetsList;
