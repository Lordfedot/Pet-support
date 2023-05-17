import AuthForm from "../components/AuthForm";
import { SectionForm } from "../styles/components/Section.styled";
import { ContainerForm } from "../styles/components/Container.styled";

const RegisterPage = () => {
  return (
    <SectionForm>
      <ContainerForm>
        <AuthForm></AuthForm>
      </ContainerForm>
    </SectionForm>
  );
};

export default RegisterPage;
