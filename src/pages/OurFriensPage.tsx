import { useEffect, useState } from "react";
import axios from "axios";
import { ServicesList } from "../styles/components/OurFriensPage.styled";
import { IService } from "../interfaces/IService";
import ServiceItem from "../components/ServiceItem";
import MainTitle from "../components/MainTitle";


const OurFriendsPage = () => {
  const [services, setServices] = useState([]);

  useEffect(() => {
    const data = async () => {
      const ourFriends = await axios.get(
        "https://pet-support-6z4x.onrender.com/api/service"
      );

      setServices(ourFriends.data.response);
    };
    data();
  }, []);

  return (
    <>
      <MainTitle>Our friends</MainTitle>
      <ServicesList>
        {services.map((service: IService) => (
          <ServiceItem key={service._id} service={service} />
        ))}
      </ServicesList>
    </>
  );
};

export default OurFriendsPage;
