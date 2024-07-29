import React from "react";
import { TIKKA_MASALA } from "@/modules/KitchenMenu/constant/kitchen-menu-constant";
import useAllMarkdownData from "@/hooks/useAllMarkdownData";
import DisplayMenu from "../../../DisplayMenu";
import menuHelper from "content/settings/kitchen_menu_helper.json";
import Typography from "@/components/Typography";
import { StyledDiv } from "./style";

const TikkaMasala = () => {
  const data = useAllMarkdownData("tikka_masala");

  if (!data.length) return null;

  const { tikka_masala_description = "" } = menuHelper || {};

  return (
    <StyledDiv>
      <div className="dish-information-wrapper">
        <Typography as="h3" className="menu-title">
          {TIKKA_MASALA}
        </Typography>
        {tikka_masala_description && (
          <Typography as="subtitle2" className="dish-note-content">
            {tikka_masala_description}
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

export default TikkaMasala;
