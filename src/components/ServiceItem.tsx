import {
  ServicesStyledLink,
  ServicesInfoList,
  ServicesItem,
  ServicesInfoItem,
  ServicesTitle,
  ServicesWrapper,
  ServicesDropdown,
  ServicesStyledText,
} from "../styles/components/OurFriensPage.styled";
import { useState } from "react";
import { days } from "../helpers/days";
import { IService } from "../interfaces/IService";

type Props = {
  service: IService;
};

const ServiceItem = ({ service }: Props) => {
  const [isShown, setIsShown] = useState(false);
  const { name, _id, email, time, address, phone, url, mapUrl } = service;
  const urlTarget = url === "#" ? "_self" : "_blank";
  const mapTarget = mapUrl === "#" ? "_self" : "_blank";
  return (
    <ServicesItem key={_id}>
      <div>
        <ServicesTitle target={urlTarget} href={url}>
          {name}
        </ServicesTitle>
        <ServicesWrapper>
          <img src="/public/images/image 42.png" alt="test" />
          <ServicesInfoList>
            <ServicesInfoItem>
              <p>Time:</p>
              <ServicesStyledText onClick={() => setIsShown(!isShown)}>
                {time}
              </ServicesStyledText>
              {isShown && (
                <ServicesDropdown>
                  {days.map((day) => (
                    <li>
                      <p>{day}</p>
                      <p>{time}</p>
                    </li>
                  ))}
                </ServicesDropdown>
              )}
            </ServicesInfoItem>
            <ServicesInfoItem>
              <p>Address:</p>
              <ServicesStyledLink target={mapTarget} href={mapUrl}>
                {address}
              </ServicesStyledLink>
            </ServicesInfoItem>
            <ServicesInfoItem>
              <p>Email:</p>
              <ServicesStyledLink href={`mailto:${email}`}>
                {email}
              </ServicesStyledLink>
            </ServicesInfoItem>
            <ServicesInfoItem>
              <p>Phone:</p>
              <ServicesStyledLink href={`tel:${phone}`}>
                {phone}
              </ServicesStyledLink>
            </ServicesInfoItem>
          </ServicesInfoList>
        </ServicesWrapper>
      </div>
    </ServicesItem>
  );
};

export default ServiceItem;
