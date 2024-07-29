import React from "react";
import { NAAN_SIDES_ITEM } from "@/modules/KitchenMenu/constant/kitchen-menu-constant";
import useAllMarkdownData from "@/hooks/useAllMarkdownData";
import DisplayMenu from "../../../DisplayMenu";
import menuHelper from "content/settings/kitchen_menu_helper.json";
import Typography from "@/components/Typography";
import { StyledDiv } from "./style";

const NaanSideItem = () => {
  const data = useAllMarkdownData("naan_sides_item");

  if (!data.length) return null;

  const { naan_side_item_description = "" } = menuHelper || {};

  return (
    <StyledDiv>
      <div className="dish-information-wrapper">
        <Typography as="h3" className="menu-title">
          {NAAN_SIDES_ITEM}
        </Typography>
        {naan_side_item_description && (
          <Typography as="subtitle2" className="dish-note-content">
            {naan_side_item_description}
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

export default NaanSideItem;
