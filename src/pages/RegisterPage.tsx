import RegisterForm from "../components/AuthForm/RegisterForm";
import { SectionForm } from "../styles/components/Section.styled";
import { ContainerForm } from "../styles/components/Container.styled";

const RegisterPage = () => {
  return (
    <SectionForm>
      <ContainerForm>
        <RegisterForm></RegisterForm>
      </ContainerForm>
    </SectionForm>
  );
};

export default RegisterPage;
