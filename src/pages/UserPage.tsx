import { Container } from "../styles/components/Container.styled";
import { Section } from "../styles/components/Section.styled";
import UserData from "../components/UserData";

const UserPage = () => {
  return (
    <Section>
      <Container>
        <UserData></UserData>
      </Container>
    </Section>
  );
};

export default UserPage;
