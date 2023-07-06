import styled from "styled-components";

export const Notices = styled.ul`
  padding-top: 60px;
  display: flex;
  flex-wrap: wrap;
  gap: 32px;
  justify-content: center;

`;

export const NoticesItem = styled.li`
  position: relative;
  border-radius: 0 0 40px 40px;
  width: 288px;
  height: 616px;
  background-color: #ffffff;
  box-shadow: 7px 4px 14px rgba(49, 21, 4, 0.07);
`;

export const NoticesAvatar = styled.img`
  width: 288px;
  height: 288px;
  display: block;
`;

export const AddFavouriteButton = styled.button`
  position: absolute;
  top: 12px;
  right: 12px;

  width: 44px;
  height: 44px;

  border-radius: 50%;
  border: none;
  background-color: rgba(255, 255, 255, 0.6);

  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`;

export const NoticeCategory = styled.p`
  position: absolute;
  left: 0;
  top: 20px;

  height: 28px;
  width: 158px;
  padding: 6px;

  text-transform: capitalize;
  text-align: center;
  font-style: normal;
  font-weight: 500;
  font-size: 12px;
  line-height: 1.33;
  letter-spacing: 0.04em;

  border-radius: 0 40px 40px 0;
  background-color: rgba(255, 255, 255, 0.6);
`;

export const NoticeDescriptionContainer = styled.div`
  padding: 20px;
  height: 248px;
  margin-bottom: 20px;
`;

export const NoticeTitle = styled.p`
  font-style: normal;
  font-weight: 700;
  font-size: 28px;
  line-height: 1.36;
  letter-spacing: -0.01em;
  padding-bottom: 20px;
`;

export const NoticeDescriptionList = styled.ul`
  height: 152px;
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

export const NoticeDescriptionItem = styled.li`
  font-weight: 500;
  font-size: 16px;
  line-height: 1.38;
`;

export const LearnMoreButton = styled.button`
  display: flex;
  justify-content: center;
  padding: 8px 0;
  background-color: transparent;

  border: 2px solid #f59256;
  border-radius: 40px;
  width: 248px;

  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 1.38;
  color: #f59256;

  cursor: pointer;

  :hover {
    background-color: #f59256;
    color: #fff;
  }
  :focus {
    background-color: #f59256;
    color: #fff;
  }
`;
