import React from "react";
import { SOUP_SALAD } from "@/modules/KitchenMenu/constant/kitchen-menu-constant";
import useAllMarkdownData from "@/hooks/useAllMarkdownData";
import DisplayMenu from "../../../DisplayMenu";
import menuHelper from "content/settings/kitchen_menu_helper.json";
import Typography from "@/components/Typography";
import { StyledDiv } from "./style";

const Starter = () => {
  const data = useAllMarkdownData("soup_salad");

  if (!data.length) return null;

  const { starter_salad_description = "" } = menuHelper || {};

  return (
    <StyledDiv>
      <div className="dish-information-wrapper">
        <Typography as="h3" className="menu-title">
          {SOUP_SALAD}
        </Typography>
        {starter_salad_description && (
          <Typography as="subtitle2" className="dish-note-content">
            {starter_salad_description}
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

export default Starter;
