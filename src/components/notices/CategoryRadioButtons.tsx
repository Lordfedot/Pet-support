import {
  CategoryLabel,
  CategoryLabelActive,
  CategoryRadioList,
  VisualyHiddenRadio,
} from "../../styles/components/notices/NoticeAddForm.styled";
import { useState, ChangeEvent } from "react";

export const CategoryRadioButtons = () => {
  const [isActive, setIsActive] = useState({
    sell: true,
    lostFound: false,
    inGoodHands: false,
  });
  const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    switch (e.currentTarget.value) {
      case "sell":
        setIsActive({ sell: true, lostFound: false, inGoodHands: false });
        break;
      case "lost/found":
        setIsActive({ sell: false, lostFound: true, inGoodHands: false });
        break;
      case "in good hands":
        setIsActive({ sell: false, lostFound: false, inGoodHands: true });
        break;
      default:
        setIsActive({ sell: true, lostFound: false, inGoodHands: false });
        break;  
    }
    console.log(e.currentTarget.value, e.currentTarget.checked);
  };
  return (
    <CategoryRadioList component="div" name="category">
      {isActive.sell ? (
        <CategoryLabelActive htmlFor="sell">sell</CategoryLabelActive>
      ) : (
        <CategoryLabel htmlFor="sell">sell</CategoryLabel>
      )}
      <VisualyHiddenRadio
        defaultChecked
        onChange={onChangeHandler}
        name="category"
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
        onChange={onChangeHandler}
        name="category"
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
        onChange={onChangeHandler}
        name="category"
        id="in good hands"
        type="radio"
        value="in good hands"
      />
    </CategoryRadioList>
  );
};
