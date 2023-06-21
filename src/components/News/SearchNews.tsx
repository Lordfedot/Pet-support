import { ChangeEvent, Dispatch, SetStateAction, useState } from "react";
import {
  AiOutlineSearchStyled,
  DeleteTextButton,
  RxCrossCircledStyled,
  NewsInput,
  InputWrapper,
} from "./News.styled";

type Prop = {
  getValue: Dispatch<SetStateAction<string>>;
};
const SearchNews = ({ getValue }: Prop) => {
  const [value, setValue] = useState("");
  const [isActive, setIsActive] = useState(false);
  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    setValue(e.currentTarget.value);
    getValue(e.currentTarget.value);
  };
  return (
    <InputWrapper>
      <NewsInput
        onFocus={() => setIsActive(true)}
        onBlur={() => setIsActive(false)}
        autoFocus
        value={value}
        onChange={onChange}
        placeholder="Search"
      ></NewsInput>
      <DeleteTextButton
        type="button"
        className="button"
        onClick={() => setValue("")}
      >
        <RxCrossCircledStyled style={{ opacity: isActive ? 1 : 0 }} />
        <AiOutlineSearchStyled style={{ opacity: isActive ? 0 : 1 }} />
      </DeleteTextButton>
    </InputWrapper>
  );
};

export default SearchNews;
