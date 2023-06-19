import { Icon } from "../svgIcon";
import {
  SexLable,
  SexRadioList,
  SexTextContentActive,
  VisualyHiddenRadio,
} from "../../styles/components/notices/NoticeAddForm.styled";
import { useState, ChangeEvent } from "react";

export const SexRadioButtons = () => {
  const [isActive, setIsActive] = useState({male: true, female: false
  });
  const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    switch (e.currentTarget.value) {
      case "male":
        setIsActive({ male: true, female: false});
        break;
      case "female":
        setIsActive({ male: false, female: true });
        break;
      default:
        setIsActive({ male: true, female: false});
        break;
    }
    console.log(e.currentTarget.value, e.currentTarget.checked);
  };
  return (
    <SexRadioList component="div" name="sex">
      <SexLable htmlFor="male">
        <Icon iconId={"iconMale"} width={60} height={60}></Icon>
        {isActive.male ? <SexTextContentActive>male</SexTextContentActive> : <span>male</span>}
      </SexLable>
      <VisualyHiddenRadio
        defaultChecked
        onChange={onChangeHandler}
        name="sex"
        id="male"
        type="radio"
        value="male"
      />

      <SexLable htmlFor="female">
        <Icon iconId={"iconFemale"} width={60} height={60}></Icon>
        {isActive.female ? <SexTextContentActive>female</SexTextContentActive> : <span>female</span>}
      </SexLable>
      <VisualyHiddenRadio
        onChange={onChangeHandler}
        name="sex"
        id="female"
        type="radio"
        value="female"
      />
    </SexRadioList>
  );
};
