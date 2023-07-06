import { Icon } from "../svgIcon";
import {
  SexLable,
  SexRadioList,
  SexTextContentActive,
  VisualyHiddenRadio,
} from "../../styles/components/notices/NoticeAddForm.styled";
import { useState, ChangeEvent } from "react";
import { useField } from "formik";

interface radiobuttonProps {
  name: string;
}
export const SexRadioButtons = ({ name }: radiobuttonProps) => {
  const [field, meta, helpers] = useField(name);
  const [isActive, setIsActive] = useState({ male: false, female: false });
  const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    switch (e.currentTarget.value) {
      case "male":
        setIsActive({ male: true, female: false });
        helpers.setValue('male')
        break;
      case "female":
        setIsActive({ male: false, female: true });
        helpers.setValue('femail')
        break;
      default:
        setIsActive({ male: false, female: false });
        break;
    }
    console.log(e.currentTarget.value, e.currentTarget.checked);
  };
  return (
    <SexRadioList component="div" name="sex">
      <SexLable htmlFor="male">
        <Icon iconId={"iconMale"} width={60} height={60}></Icon>
        {isActive.male ? (
          <SexTextContentActive>male</SexTextContentActive>
        ) : (
          <span>male</span>
        )}
      </SexLable>
      <VisualyHiddenRadio
        {...field}
        onChange={onChangeHandler}
        id="male"
        type="radio"
        value="male"
      />

      <SexLable htmlFor="female">
        <Icon iconId={"iconFemale"} width={60} height={60}></Icon>
        {isActive.female ? (
          <SexTextContentActive>female</SexTextContentActive>
        ) : (
          <span>female</span>
        )}
      </SexLable>
      <VisualyHiddenRadio
        {...field}
        onChange={onChangeHandler}
        id="female"
        type="radio"
        value="female"
      />
    </SexRadioList>
  );
};
