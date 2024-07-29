import React from "react";
import { APPETIZER } from "@/modules/KitchenMenu/constant/kitchen-menu-constant";
import useAllMarkdownData from "@/hooks/useAllMarkdownData";
import DisplayMenu from "../../../DisplayMenu";
import menuHelper from "content/settings/kitchen_menu_helper.json";
import Typography from "@/components/Typography";
import { StyledDiv } from "./style";

const Appetizer = () => {
  const data = useAllMarkdownData("appetizer");

  if (!data.length) return null;

  const { appetizer_description = "" } = menuHelper || {};

  return (
    <StyledDiv>
      <div className="dish-information-wrapper">
        <Typography as="h3" className="menu-title">
          {APPETIZER}
        </Typography>
        {appetizer_description && (
          <Typography as="subtitle2" className="dish-note-content">
            {appetizer_description}
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

export default Appetizer;
