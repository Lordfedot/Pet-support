import { UserPageContainer } from "../styles/components/Container.styled";
import { Section } from "../styles/components/Section.styled";
import UserData from "../components/UserData/UserData";
import PetsData from "../components/PetsData/PetsData";
import { useEffect, useState } from "react";
import axios from "axios";
import { DisplayUser } from "../interfaces/IDisplayUser";
import { Pet } from "../interfaces/Pet";
import Loader from "../components/Loader";

const UserPage = () => {
  const [user, setUser] = useState<DisplayUser | null>(null);
  const [pets, setPets] = useState<Pet[]>([]);
  const [status, setStatus] = useState("idle");
  useEffect(() => {
    setStatus("pending");
    const data = async () => {
      const data = await axios.get(
        "https://pet-support-6z4x.onrender.com/api/user/pets"
      );
      setUser(data.data.response.userInfo[0]);
      setPets(data.data.response.petsInfo);
      setStatus("resolved");
    };
    data();
  }, []);

  return (
    <>
      {status === "idle" && <></>}
      <Section>
        <UserPageContainer>
          {status === "pending" && <Loader />}
          {status === "resolved" && (
            <>
              <UserData user={user}></UserData>
              <PetsData setPets={setPets} pets={pets}></PetsData>
            </>
          )}
        </UserPageContainer>
      </Section>
    </>
  );
};

export default UserPage;
