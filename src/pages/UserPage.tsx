import { UserPageContainer } from "../styles/components/Container.styled";
import { Section } from "../styles/components/Section.styled";
import UserData from "../components/UserData";

const UserPage = () => {
  return (
    <Section>
      <UserPageContainer>
        <UserData></UserData>
      </UserPageContainer>
    </Section>
  );
};

export default UserPage;
