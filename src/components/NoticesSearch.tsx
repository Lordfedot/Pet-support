import { ChangeEvent, useState } from "react";
import {
  SearchNoticesInput,
  SearchNoticesWrapper,
  CrossButton,
} from "../styles/components/SearchNotices.styled";
import { AiOutlineSearch } from "react-icons/ai";
import { RxCrossCircled } from "react-icons/rx";

const NoticesSearch = () => {
  const [value, setValue] = useState("");

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };
  return (
    <SearchNoticesWrapper>
      <SearchNoticesInput
        autoFocus
        maxLength={40}
        value={value}
        onChange={handleInputChange}
        placeholder="Search"
      ></SearchNoticesInput>
      <CrossButton onClick={() => setValue("")}>
        <RxCrossCircled size={"100%"} color="inherit" className="cross" />
        <AiOutlineSearch size={"100%"} color="inherit" className="search" />
      </CrossButton>
    </SearchNoticesWrapper>
  );
};

export default NoticesSearch;
