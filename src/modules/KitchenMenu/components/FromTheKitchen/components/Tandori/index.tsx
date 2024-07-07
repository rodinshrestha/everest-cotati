import React from "react";
import DisplayMenu from "../../../DisplayMenu";
import Accordion from "@/components/Accordion";
import { TANDOORI } from "@/modules/KitchenMenu/constant/kitchen-menu-constant";
import useAllMarkdownData from "@/hooks/useAllMarkdownData";
import menuHelper from "content/settings/kitchen_menu_helper.json";
import Typography from "@/components/Typography";
import { StyledDiv } from "./style";

const Tandori = () => {
  const data = useAllMarkdownData("tandoori");

  if (!data.length) return null;

  const { tandoori_description = "" } = menuHelper || {};

  return (
    <StyledDiv>
      <div className="dish-information-wrapper">
        <Typography as="h3" className="menu-title">
          {TANDOORI}
        </Typography>
        {tandoori_description && (
          <Typography as="subtitle2" className="dish-note-content">
            {tandoori_description}
          </Typography>
        )}
      </div>

      <div className="menu-wrapper">
        {data.map((x, i) => {
          return (
            <DisplayMenu
              name={x.name}
              desc={x.description}
              price={x.price}
              key={i}
            />
          );
        })}
      </div>
    </StyledDiv>
  );
};

export default Tandori;
