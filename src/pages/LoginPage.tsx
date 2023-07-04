import LoginForm from "../components/AuthForm/LoginForm";
import { ContainerForm } from "../styles/components/Container.styled";
import { SectionForm } from "../styles/components/Section.styled";
const LoginPage = () => {
  return (
    <SectionForm>
      <ContainerForm>
        <LoginForm></LoginForm>
      </ContainerForm>
    </SectionForm>
  );
};

export default LoginPage;
