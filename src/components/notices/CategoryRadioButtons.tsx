import { useField } from "formik";
import {
  CategoryLabel,
  CategoryLabelActive,
  CategoryRadioList,
  VisualyHiddenRadio,
} from "../../styles/components/notices/NoticeAddForm.styled";
import { useState, ChangeEvent } from "react";

interface radiobuttonProps {
  name: string
}

export const CategoryRadioButtons = ({name}: radiobuttonProps) => {
  const [field, meta, helpers] = useField(name);
  const [isActive, setIsActive] = useState({
    sell: false,
    lostFound: false,
    inGoodHands: false,
  });
  const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    switch (e.currentTarget.value) {
      case "sell":
        setIsActive({ sell: true, lostFound: false, inGoodHands: false });
        helpers.setValue('sell')
        break;
      case "lost/found":
        setIsActive({ sell: false, lostFound: true, inGoodHands: false });
        helpers.setValue("lost/found");
        break;
      case "in good hands":
        setIsActive({ sell: false, lostFound: false, inGoodHands: true });
        helpers.setValue("in good hands")
        break;
      default:
        setIsActive({ sell: false, lostFound: false, inGoodHands: false });
        break;
    }
    console.log(e.currentTarget.value, e.currentTarget.checked);
  };
  return (
    <CategoryRadioList role="group">
      {isActive.sell ? (
        <CategoryLabelActive htmlFor="sell">sell</CategoryLabelActive>
      ) : (
        <CategoryLabel htmlFor="sell">sell</CategoryLabel>
      )}
      <VisualyHiddenRadio
        {...field}
        onChange={onChangeHandler}
        id="sell"
        type="radio"
        value="sell"
      />
      {isActive.lostFound ? (
        <CategoryLabelActive htmlFor="lost/found">
          lost/found
        </CategoryLabelActive>
      ) : (
        <CategoryLabel htmlFor="lost/found">lost/found</CategoryLabel>
      )}
      <VisualyHiddenRadio
        {...field}
        onChange={onChangeHandler}
        id="lost/found"
        type="radio"
        value="lost/found"
      />
      {isActive.inGoodHands ? (
        <CategoryLabelActive htmlFor="in good hands">
          in good hands
        </CategoryLabelActive>
      ) : (
        <CategoryLabel htmlFor="in good hands">in good hands</CategoryLabel>
      )}
      <VisualyHiddenRadio
        {...field}
        onChange={onChangeHandler}
        id="in good hands"
        type="radio"
        value="in good hands"
      />
    </CategoryRadioList>
  );
};
