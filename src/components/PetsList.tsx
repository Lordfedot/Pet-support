import { Pet } from "../interfaces/Pet";
import {
  PetsListStyled,
  PetsItem,
  PetImg,
  PetsInfoList,
  PetsInfoItem,
} from "../styles/components/PetsList.styled";
type Props = {
  pets: Pet[];
};

const PetsList = ({ pets }: Props) => {
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
        </PetsItem>
      ))}
    </PetsListStyled>
  );
};

export default PetsList;
