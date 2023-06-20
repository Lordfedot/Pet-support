import { useEffect, useState } from "react";
import axios from "axios";
import { ServicesList } from "../styles/components/OurFriensPage.styled";
import { IService } from "../interfaces/IService";
import ServiceItem from "../components/ServiceItem";
import MainTitle from "../components/MainTitle";
import { Section } from "../styles/components/Section.styled";
import { Container } from "../styles/components/Container.styled";
import Loader from "../components/Loader";

const OurFriendsPage = () => {
  const [services, setServices] = useState([]);
  const [status, setStatus] = useState("idle");
  useEffect(() => {
    setStatus("pending");
    const data = async () => {
      const ourFriends = await axios.get(
        "https://pet-support-6z4x.onrender.com/api/service"
      );

      setServices(ourFriends.data.response);
      setStatus("resolved");
    };
    data();
  }, []);

  return (
    <>
      {status === "idle" && <></>}
      <Section>
        <Container>
          {status === "pending" && <Loader />}
          {status === "resolved" && (
            <>
              <MainTitle>Our friends</MainTitle>
              <ServicesList>
                {services.map((service: IService) => (
                  <ServiceItem key={service._id} service={service} />
                ))}
              </ServicesList>
            </>
          )}
        </Container>
      </Section>
    </>
  );
};

export default OurFriendsPage;
