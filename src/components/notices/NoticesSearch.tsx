import { ChangeEvent, useEffect, useState } from "react";
import {
  SearchNoticesInput,
  SearchNoticesWrapper,
  DeleteTextButton,
  AiOutlineSearchStyled,
  RxCrossCircledStyled,
} from "../../styles/components/SearchNotices.styled";
import { useSearchParams } from "react-router-dom";

type SearchProps = {
  querryHandler: (data: string) => void;
};

const NoticesSearch = ({ querryHandler }: SearchProps) => {
  const [value, setValue] = useState("");
  const [isActive, setIsActive] = useState(false);
  const [searchParams, setSearchParams] = useSearchParams();

  useEffect(() => {
    const querry: string = searchParams.get("title") ?? "";
    console.log(querry);

    querryHandler(querry);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [searchParams]);

  const onDeleteButtonClick = () => {
    setValue('');
    setSearchParams('');
  }

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
    setSearchParams(`title=${e.target.value}`);
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
      <DeleteTextButton
        type="button"
        className="button"
        onClick={onDeleteButtonClick}
      >
        {isActive ? <RxCrossCircledStyled /> : <AiOutlineSearchStyled />}
      </DeleteTextButton>
    </SearchNoticesWrapper>
  );
};

export default NoticesSearch;
