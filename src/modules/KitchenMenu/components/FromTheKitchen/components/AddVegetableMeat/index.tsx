import React from "react";
import { ADD_VEGETABLE_MEAT } from "@/modules/KitchenMenu/constant/kitchen-menu-constant";
import useAllMarkdownData from "@/hooks/useAllMarkdownData";
import DisplayMenu from "../../../DisplayMenu";
import menuHelper from "content/settings/kitchen_menu_helper.json";
import Typography from "@/components/Typography";
import { StyledDiv } from "./style";

const AddVegetableMeat = () => {
  const data = useAllMarkdownData("add_vegetable_or_meat");

  if (!data.length) return null;

  const { add_vegetable_or_meat_description = "" } = menuHelper || {};

  return (
    <StyledDiv>
      <div className="dish-information-wrapper">
        <Typography as="h3" className="menu-title">
          {ADD_VEGETABLE_MEAT}
        </Typography>
        {add_vegetable_or_meat_description && (
          <Typography as="subtitle2" className="dish-note-content">
            {add_vegetable_or_meat_description}
          </Typography>
        )}
      </div>
      <div className="menu-wrapper">
        {data.map((item, i) => {
          return <DisplayMenu {...item} key={i} />;
        })}
      </div>
    </StyledDiv>
  );
};

export default AddVegetableMeat;
