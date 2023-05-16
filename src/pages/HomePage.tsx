import {
  HomeTitle,
  HomeSection,
  HomeContainer,
  WavesBG,
  DogBG,
} from "../styles/components/HomePage.styled";

const HomePage = () => {
  return (
    <WavesBG>
      <DogBG>
        <HomeSection>
          <HomeContainer>
            <HomeTitle>Take good care of your small pets</HomeTitle>;
          </HomeContainer>
        </HomeSection>
      </DogBG>
    </WavesBG>
  );
};

export default HomePage;
