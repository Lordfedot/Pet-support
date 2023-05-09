import Header from "./Header";
import { FC, Suspense } from "react";
import { Outlet } from "react-router-dom";
import { Container } from "../styles/components/Container.styled";
import { Section } from "../styles/components/Section.styled";
const SharedLayout: FC = () => {
  return (
    <Container>
      <Header />
      <main>
        <Section>
          <Suspense>
            <Outlet />
          </Suspense>
        </Section>
      </main>
    </Container>
  );
};

export default SharedLayout;
