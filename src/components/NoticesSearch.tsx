import { ChangeEvent, useState } from "react";
import {
  SearchNoticesInput,
  SearchNoticesWrapper,
  CrossButton,
  AiOutlineSearchStyled,
  RxCrossCircledStyled,
} from "../styles/components/SearchNotices.styled";

const NoticesSearch = () => {
  const [value, setValue] = useState("");
  const [isActive, setIsActive] = useState(false);

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };
  return (
    <SearchNoticesWrapper>
      <SearchNoticesInput
        onFocus={() => setIsActive(true)}
        onBlur={() => setIsActive(false)}
        autoFocus
        value={value}
        onChange={handleInputChange}
        placeholder="Search"
      ></SearchNoticesInput>
      <CrossButton type="button" className="button" onClick={() => setValue('')}>
        {isActive ?<RxCrossCircledStyled />  : <AiOutlineSearchStyled />}
      </CrossButton>

    </SearchNoticesWrapper>
  );
};

export default NoticesSearch;